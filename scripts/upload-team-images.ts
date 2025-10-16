import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const BUCKET_NAME = 'profile-images';
const TEAM_FOLDER = 'team';

// Team member images to upload
const teamImages = [
  'Tarek.jpg',
  'Irene.jpg',
  'Dora.jpeg',
  'Martin.jpg',
  'Misty.JPG',
  'Veronika.jpeg',
  'Quan.JPG',
  'Nikhil.jpg',
  'Sarah.jpeg',
  'Mariia.jpeg',
  'Ionela.jpeg',
  'Marina.jpg'
];

async function uploadTeamImages() {
  console.log('🚀 Starting team images upload to Supabase Storage...\n');

  for (const image of teamImages) {
    const localPath = path.join(process.cwd(), 'public', 'team', image);
    const storagePath = `${TEAM_FOLDER}/${image}`;

    try {
      // Read the file
      const fileBuffer = fs.readFileSync(localPath);
      const fileSize = (fileBuffer.length / 1024).toFixed(2);

      console.log(`📤 Uploading ${image} (${fileSize} KB)...`);

      // Determine content type
      const ext = path.extname(image).toLowerCase();
      const contentType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';

      // Upload to Supabase
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, fileBuffer, {
          contentType,
          upsert: true, // Replace if exists
          cacheControl: '31536000' // Cache for 1 year
        });

      if (error) {
        console.error(`   ❌ Error uploading ${image}:`, error.message);
        continue;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(storagePath);

      console.log(`   ✅ Uploaded: ${urlData.publicUrl}\n`);

    } catch (err) {
      console.error(`   ❌ Error processing ${image}:`, err);
    }
  }

  console.log('✨ Upload complete!');
}

uploadTeamImages().catch(console.error);
