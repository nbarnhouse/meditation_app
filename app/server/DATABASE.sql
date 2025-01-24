--Database Name is meditation_app

-- Create categories table
CREATE TABLE categories (
  "id" serial  PRIMARY KEY,
  "title" VARCHAR(255) not null
);

-- Create affirmations table
CREATE TABLE affirmations (
  id serial  PRIMARY KEY,
  text TEXT ,
  category_id INT ,
  image_url VARCHAR(255),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

--Add Categories to table
INSERT INTO "categories" ("title") 
VALUES ('Positivity'),
  ('Reduce Anxiety'),
  ('Success'),
  ('Self-Belief'),
  ('Mental Health'),
  ('Law of Attraction'),
  ('Limiting Beliefs');


INSERT INTO affirmations (text, category_id, image_url) VALUES
  ('Every day brings new opportunities to grow and excel. I am constantly evolving and improving. My positive mindset attracts abundance and success. I am grateful for the journey and the lessons it brings.', 1, 'path_to_image_1.jpg'),
  ('I am the architect of my destiny, and I build it with positivity and determination. Challenges are stepping stones to my greatness. I embrace each moment with enthusiasm and confidence. My future is bright and limitless.', 1, 'path_to_image_2.jpg'),
  ('I radiate positivity and inspire those around me. My energy is contagious, and it fuels my drive to succeed. I focus on solutions, not problems, and I am resilient in the face of adversity. I am committed to living a life of purpose and joy.', 1, 'path_to_image_3.jpg'),
  ('I believe in my potential and trust the process of life. Every setback is a setup for a greater comeback. I choose to see the good in every situation and remain optimistic. My passion and persistence are the keys to my unstoppable success.', 1, 'path_to_image_4.jpg');

INSERT INTO affirmations (text, category_id, image_url) VALUES
  ('I am in control of my thoughts, and I choose peace over worry. Each breath I take calms my mind and soothes my soul. I release the need to stress over what I cannot control. I am strong, capable, and at ease in all situations.', 2, 'path_to_image_5.jpg'),
  ('I embrace calmness and serenity as my natural state of being. My mind is clear, my heart is light, and I am present in this moment. Anxiety has no power over me, for I am resilient and grounded. I trust in my ability to handle whatever comes my way.', 2, 'path_to_image_6.jpg'),
  ('Every day, I grow more confident in managing my stress and anxiety. I focus on positive thoughts and let go of fears that do not serve me. I am surrounded by support and love, and I embrace the peace within me. My inner strength guides me through any challenge with grace and calm.', 2, 'path_to_image_7.jpg'),
  ('I release tension and embrace relaxation in my mind and body. I am safe, I am loved, and I am free from the grip of anxiety. Each step I take is filled with confidence and tranquility. I choose to live in the present moment, where peace and joy reside.', 2, 'path_to_image_8.jpg');

INSERT INTO affirmations (text, category_id, image_url) VALUES
  ('I am destined for greatness, and every step I take leads me closer to success. My dedication and hard work are the building blocks of my achievements. I see opportunities where others see obstacles. Success is my journey, and I embrace it with passion and perseverance.', 3, 'path_to_image_9.jpg'),
  ('I am a powerful creator of my destiny, and I attract success effortlessly. My vision is clear, my goals are set, and my actions are aligned with my highest purpose. I celebrate each victory, no matter how small, as a stepping stone to my ultimate triumph. I am unstoppable, and my potential is limitless.', 3, 'path_to_image_10.jpg'),
  ('I believe in my abilities and trust the process of achieving success. Challenges are opportunities for growth and refinement. I am focused, driven, and committed to my goals. Success flows to me naturally because I am prepared and deserving.', 3, 'path_to_image_11.jpg'),
  ('I am a magnet for success and abundance in all areas of my life. My mindset is positive, and my actions are intentional. I learn from every experience and continuously improve. Success is not a destination but a journey I enjoy every day.', 3, 'path_to_image_12.jpg');

INSERT INTO affirmations (text, category_id, image_url) VALUES
  ('I believe in my infinite potential and trust my inner wisdom. Every day, I grow more confident in my abilities and my purpose. I am capable of achieving greatness and worthy of all my dreams. My self-belief is the foundation of my success.', 4, 'path_to_image_13.jpg'),
  ('I trust myself and my journey, knowing I have everything I need within me. My unique strengths and talents guide me towards my goals. I am resilient and can overcome any challenge that comes my way. My belief in myself fuels my determination and courage.', 4, 'path_to_image_14.jpg'),
  ('I am confident in who I am and what I have to offer the world. Each step I take is filled with purpose and self-assurance. I embrace my individuality and celebrate my achievements. My self-belief empowers me to create the life I desire.', 4, 'path_to_image_15.jpg'),
  ('I am the master of my destiny and believe in my ability to shape my future. My thoughts are powerful, and I choose to think positively about myself. I am worthy of success and happiness. With each passing day, my self-belief grows stronger and unwavering.', 4, 'path_to_image_16.jpg');