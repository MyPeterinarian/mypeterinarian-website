'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPage() {
  const t = useTranslations('team');
  const locale = useLocale();

  const teamMembers = [
    {
      name: 'Tarek',
      role: t('members.tarek.role'),
      bio: t('members.tarek.bio'),
      location: 'Copenhagen & Tokyo',
      image: '/team/Tarek.jpg'
    },
    {
      name: 'Dr. Irene',
      role: t('members.irene.role'),
      bio: t('members.irene.bio'),
      location: 'Copenhagen',
      image: '/team/Irene.jpg'
    },
    {
      name: 'Dora (Dori)',
      role: t('members.dora.role'),
      bio: t('members.dora.bio'),
      location: 'Copenhagen',
      image: '/team/Dora.jpeg'
    },
    {
      name: 'Martin',
      role: t('members.martin.role'),
      bio: t('members.martin.bio'),
      location: 'Copenhagen',
      image: '/team/Martin.jpg'
    },
    {
      name: 'Misty',
      role: t('members.misty.role'),
      bio: t('members.misty.bio'),
      location: 'Copenhagen',
      image: '/team/Misty.JPG'
    },
    {
      name: 'Veronika',
      role: t('members.veronika.role'),
      bio: t('members.veronika.bio'),
      location: 'Copenhagen',
      image: '/team/Veronika.jpeg'
    },
    {
      name: 'Ionela',
      role: t('members.ionela.role'),
      bio: t('members.ionela.bio'),
      location: 'Copenhagen',
      image: '/team/Ionela.jpeg'
    },
    {
      name: 'Quan',
      role: t('members.quan.role'),
      bio: t('members.quan.bio'),
      location: 'Copenhagen',
      image: '/team/Quan.JPG'
    },
    {
      name: 'Nikhil',
      role: t('members.nikhil.role'),
      bio: t('members.nikhil.bio'),
      location: 'Copenhagen',
      image: '/team/Nikhil.jpg'
    },
    {
      name: 'Sarah',
      role: t('members.sarah.role'),
      bio: t('members.sarah.bio'),
      location: 'Copenhagen',
      image: '/team/Sarah.jpeg'
    },
    {
      name: 'Mariia',
      role: t('members.mariia.role'),
      bio: t('members.mariia.bio'),
      location: 'Copenhagen',
      image: '/team/Mariia.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              {t('subtitle')}
            </p>
            <div className="flex items-center justify-center text-gray-500 gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Copenhagen</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} at MyPeterinarian Copenhagen`}
                      width={128}
                      height={128}
                      className="rounded-full object-cover w-full h-full border-4 border-blue-100"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-blue-600" />
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center text-gray-500 text-sm mb-4 gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <Link
            href={`/${locale}/booking`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
