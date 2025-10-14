-- Add booking_ready_at field to track when booking became complete
ALTER TABLE chat_conversations
ADD COLUMN IF NOT EXISTS booking_ready_at TIMESTAMPTZ;

-- Create index for pending bookings query
CREATE INDEX IF NOT EXISTS idx_chat_conversations_pending_booking
ON chat_conversations(booking_ready_at)
WHERE booking_ready_at IS NOT NULL AND booking_forwarded = FALSE;
