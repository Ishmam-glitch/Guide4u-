/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProblemSolution {
  id: string;
  question: string;
  problem: string;
  solution: string;
  category: 'academic' | 'social' | 'personal' | 'health';
}

export const COMMON_TEEN_PROBLEMS: ProblemSolution[] = [
  {
    id: 'academic-stress',
    question: "I'm overwhelmed by schoolwork and exams.",
    problem: "Academic Stress & Grade Pressure",
    solution: "Start by breaking your tasks into smaller, manageable chunks. Use the Pomodoro technique: 25 minutes of focused study followed by a 5-minute break. Remember, your worth isn't defined by a single grade. Talk to your teachers if you're falling behind; they are usually more understanding than you think.",
    category: 'academic'
  },
  {
    id: 'friendship-exclusion',
    question: "I feel left out by my friends.",
    problem: "Social Exclusion",
    solution: "It's tough to feel like the odd one out. Try reaching out to one person individually instead of the whole group. If they consistently exclude you, it might be time to find people who value your presence. Join a club based on your hobbies to meet like-minded peers.",
    category: 'social'
  },
  {
    id: 'time-management',
    question: "I never have enough time for anything.",
    problem: "Poor Time Management",
    solution: "Audit your screen time—you'll be surprised how much time social media takes! Use a digital planner or a physical notebook. Prioritize tasks using the Eisenhower Matrix: Focus on what's 'Important and Urgent' first. Don't forget to schedule 'chill time' too.",
    category: 'academic'
  },
  {
    id: 'self-esteem',
    question: "I hate how I look in photos.",
    problem: "Body Image & Self-Esteem",
    solution: "Social media is a highlight reel, not reality. Filters and angles change everything. Focus on what your body *does* for you rather than how it looks. Practicing positive self-talk and surrounding yourself with diverse content can help shift your perspective.",
    category: 'personal'
  },
  {
    id: 'peer-pressure',
    question: "My friends are doing things I'm not comfortable with.",
    problem: "Peer Pressure",
    solution: "A true friend respects your boundaries. You can use 'The I Statement': 'I don't feel comfortable doing this right now.' If you need an excuse, blame your parents! ('My mom is checking my location'). Your safety and values come first.",
    category: 'social'
  },
  {
    id: 'sleep-deprivation',
    question: "I'm always tired in class.",
    problem: "Sleep Deprivation",
    solution: "Teens need 8-10 hours of sleep. Try a 'digital sunset'—put your phone away 30 minutes before bed. The blue light from screens suppresses melatonin, the sleep hormone. Keep your room cool and dark for better rest.",
    category: 'health'
  },
  {
    id: 'bullying',
    question: "One person keeps making fun of me online.",
    problem: "Cyberbullying",
    solution: "Don't engage or retaliate—that's what they want. Screenshot the evidence, block the user, and report the account. Most importantly, tell a trusted adult. You don't have to face this alone, and there are digital safety tools on every platform.",
    category: 'social'
  },
  {
    id: 'family-conflict',
    question: "My parents just don't get me.",
    problem: "Family Communication Issues",
    solution: "Communication is a two-way street. Try talking to them when everyone is calm, not in the middle of a fight. Use 'I feel' instead of 'You always.' Explain your perspective clearly and ask for more independence in exchange for showing more responsibility.",
    category: 'personal'
  },
  {
    id: 'motivation',
    question: "I've lost interest in everything I used to love.",
    problem: "Lack of Motivation",
    solution: "Burnout is real. Sometimes you need a reset. Try the '5-Minute Rule': Tell yourself you'll do a task for just five minutes. Often, getting started is the hardest part. If this feeling persists for weeks, talk to a counselor as it might be a sign of depression.",
    category: 'health'
  },
  {
    id: 'future-anxiety',
    question: "I have no idea what I want to do with my life.",
    problem: "Career & Future Anxiety",
    solution: "You're only 15 or 16—you don't need a life plan yet! Focus on finding things you enjoy right now. Most people change careers multiple times. Use this time to explore different subjects and hobbies without the pressure of 'forever.'",
    category: 'academic'
  },
  {
    id: 'social-media-comparison',
    question: "Everyone on Instagram seems to have a better life than me.",
    problem: "Social Media Comparison",
    solution: "Remind yourself that social media is a highlight reel. People rarely post their failures or boring days. Take regular 'unplug' breaks and follow accounts that inspire you rather than make you feel inadequate.",
    category: 'personal'
  },
  {
    id: 'exam-panic',
    question: "I freeze up during every important test.",
    problem: "Test Anxiety",
    solution: "Practice deep breathing (Box Breathing: 4s inhale, 4s hold, 4s exhale, 4s hold). Prioritize sleep before the exam—your brain needs rest to recall information. Try 'Active Recall' instead of just re-reading notes.",
    category: 'academic'
  },
  {
    id: 'broken-friendship',
    question: "My best friend stop talking to me for no reason.",
    problem: "Friendship Fallout",
    solution: "It hurts when a friend distance themselves. Give them space for a few days, then reach out calmly to ask if something is wrong. If they aren't willing to talk, focus on yourself and other friends who value you.",
    category: 'social'
  },
  {
    id: 'procrastination',
    question: "I always wait until the last minute to do my homework.",
    problem: "Procrastination",
    solution: "Try the 'Two-Minute Rule': If a task takes less than 2 minutes, do it now. For big tasks, just commit to doing 5 minutes. Often, getting started is the hardest part. Remove distractions like your phone from your desk.",
    category: 'academic'
  },
  {
    id: 'body-changes',
    question: "My body is changing and I feel awkward and self-conscious.",
    problem: "Puberty & Growth Changes",
    solution: "Everyone develops at a different pace—some early, some late. It's completely normal to feel awkward. Focus on hygiene and wearing clothes that make you feel comfortable. Talk to an older sibling or parent if you're worried about something specific.",
    category: 'health'
  },
  {
    id: 'difficulty-concentrating',
    question: "I can't seem to focus on my teacher for more than 10 minutes.",
    problem: "Concentration Issues",
    solution: "Make sure you're getting enough iron and hydration. Try sitting near the front of the class to minimize distractions. Taking handwritten notes can also keep your brain engaged more than just listening.",
    category: 'academic'
  },
  {
    id: 'loneliness',
    question: "I have people to talk to, but I still feel lonely.",
    problem: "Emotional Loneliness",
    solution: "Loneliness isn't about how many people you know; it's about the depth of your connections. Try sharing something more personal or vulnerable with a trusted friend. Quality over quantity is key for emotional fulfillment.",
    category: 'personal'
  },
  {
    id: 'public-speaking',
    question: "I have to give a presentation and I'm terrified.",
    problem: "Fear of Public Speaking",
    solution: "Know your first three sentences by heart. Looking at the back wall instead of eyes can help. Remember that most people are too worried about their own presentations to notice your nerves. Practice in front of a mirror or a pet.",
    category: 'academic'
  },
  {
    id: 'digital-addiction',
    question: "I spend 8+ hours a day on my phone and can't stop.",
    problem: "Digital Overuse",
    solution: "Set app limits in your phone settings. Find an 'offline' hobby like drawing, sports, or reading. Your brain's dopamine system is being hijacked; it takes about 3 days of reduced use to start feeling more present.",
    category: 'health'
  },
  {
    id: 'toxic-friendship',
    question: "My friend always puts me down but says they're 'just joking.'",
    problem: "Toxic Relationships",
    solution: "Constant 'jokes' that hurt aren't jokes—it's a form of mean-spiritedness. Set a boundary: 'I don't like it when you say that.' If they don't stop, they aren't a true friend. You deserve respect.",
    category: 'social'
  },
  {
    id: 'seasonal-sadness',
    question: "I always feel sad and unmotivated during the winter.",
    problem: "Seasonal Affective Disorder",
    solution: "Try to get as much natural sunlight as possible, even if it's cold. Regular exercise and staying socially active can also help. Mention this to a doctor; sometimes a Vitamin D supplement or a light therapy lamp can make a big difference.",
    category: 'health'
  },
  {
    id: 'money-stress',
    question: "I feel bad that I can't afford the things my friends buy.",
    problem: "Financial Comparison",
    solution: "Wealth is often invisible, and many people live beyond their means. Focus on being a great person and friend—that's what really matters. Look for fun, free activities like hiking, movie nights at home, or visiting parks.",
    category: 'personal'
  },
  {
    id: 'perfectionism',
    question: "If I don't get 100%, I feel like a total failure.",
    problem: "Unhealthy Perfectionism",
    solution: "Mistakes are how we learn. Aim for 'Excellent' instead of 'Perfect.' Reward yourself for the *effort* you put in, regardless of the outcome. Perfection is an impossible standard that kills creativity.",
    category: 'personal'
  },
  {
    id: 'shyness',
    question: "I want to talk to people but I'm too scared to start.",
    problem: "Social Shyness",
    solution: "Start small. Smile at someone or give a simple compliment ('Cool shoes!'). Ask open-ended questions like 'What do you think of this class?' People generally love talking about themselves, which takes the pressure off you.",
    category: 'social'
  },
  {
    id: 'sibling-rivalry',
    question: "My siblings are always annoying me and my parents take their side.",
    problem: "Sibling Conflict",
    solution: "Siblings often crave attention. Try to ignore the 'bait.' If you can't, ask for a family meeting to discuss boundaries. Having your own space or time where they aren't allowed can help preserve your sanity.",
    category: 'personal'
  },
  {
    id: 'internet-safety',
    question: "Someone I met online is asking for my personal info.",
    problem: "Digital Safety Concern",
    solution: "NEVER share your full name, school, address, or photos with strangers. Block and report them immediately. Real friends will respect your privacy and won't pressure you for personal details.",
    category: 'health'
  },
  {
    id: 'lack-of-privacy',
    question: "My parents go through my phone and room.",
    problem: "Privacy Borders",
    solution: "Trust is earned. If you show you're responsible and open with them about the 'big stuff,' they're more likely to give you space. Have a calm conversation about why privacy is important for your growth and identity.",
    category: 'personal'
  },
  {
    id: 'failing-subject',
    question: "I'm genuinely failing a subject and I'm scared to tell anyone.",
    problem: "Academic Failure",
    solution: "Tell your teacher or parents *now*—it's much easier to fix mid-term than at the end. Ask for a tutor or extra help sessions. Most failures are just 'not yet'—you just haven't mastered the material yet.",
    category: 'academic'
  },
  {
    id: 'unrequited-crush',
    question: "I like someone who doesn't even know I exist.",
    problem: "Romantic Rejection/Anxiety",
    solution: "Crushes are intense but usually temporary. Try to get to know them as a person first. If it doesn't work out, remember that your worth isn't decided by whether one specific person likes you back.",
    category: 'social'
  },
  {
    id: 'grief',
    question: "I lost someone I love and I don't know how to move on.",
    problem: "Dealing with Grief",
    solution: "Grief doesn't have a timeline. Allow yourself to feel the sadness. Talk about your memories with others. If you're struggling to function daily after several months, seeking a specialized grief counselor is a very brave and helpful step.",
    category: 'health'
  },
  {
    id: 'over-scheduled',
    question: "I have sports, music, and tutoring every single day.",
    problem: "Extracurricular Burnout",
    solution: "You can't do everything excellently. Pick the things you truly love and consider dropping the ones you're only doing for your resume. Having time for rest is just as important as being 'productive.'",
    category: 'personal'
  },
  {
    id: 'body-odor',
    question: "I'm worried I smell bad after PE class.",
    problem: "Hygiene Anxiety",
    solution: "Everyone sweats! Keep a small deodorant and a spare shirt in your locker. Drinking plenty of water and wearing breathable cotton fabrics can also help regulate your body temperature and odor.",
    category: 'health'
  },
  {
    id: 'cliquey-behavior',
    question: "My school is divided into groups and I don't fit anywhere.",
    problem: "School Social Cliques",
    solution: "Cliques are usually based on insecurity. You don't need a group label. Be 'The Bridge'—be friendly with individuals from different groups. You'll end up with a much more diverse and interesting circle of friends.",
    category: 'social'
  },
  {
    id: 'impulse-control',
    question: "I keep saying things I regret later.",
    problem: "Impulsivity",
    solution: "Try the 'Three-Second Rule': Before speaking, wait three seconds. Is it kind? Is it true? Is it necessary? Your teenage brain is still developing its 'brakes,' so practicing this pause is like a workout for your mind.",
    category: 'personal'
  },
  {
    id: 'teacher-conflict',
    question: "My teacher seems to have it out for me.",
    problem: "Difficulty with Authority",
    solution: "Sometimes personalities clash. Stay respectful and do your work excellently—it leaves them with no reason to criticize you. If it's true unfairness, document the incidents and talk to a school counselor.",
    category: 'academic'
  },
  {
    id: 'eating-habits',
    question: "I only eat junk food because I'm always on the run.",
    problem: "Poor Nutrition",
    solution: "Your brain and body need fuel to function. Try simple swaps: water instead of soda, or a piece of fruit instead of chips. Meal prepping small snacks on Sundays can save you during a busy week.",
    category: 'health'
  },
  {
    id: 'fear-of-missing-out',
    question: "I see my friends hanging out without me on Snapchat.",
    problem: "FOMO (Fear of Missing Out)",
    solution: "FOMO is a trap. Remember that they probably isn't having as much fun as the filtered photos suggest. Use that time to do something you genuinely enjoy alone. Being comfortable with your own company is a superpower.",
    category: 'social'
  },
  {
    id: 'messy-room',
    question: "My room is a disaster and it makes me feel stressed.",
    problem: "Disorganization",
    solution: "Clean for just 10 minutes a day with your favorite music on. A clear space often leads to a clear mind. Start with one small area—like your desk surface—and expand from there.",
    category: 'personal'
  },
  {
    id: 'acne-anxiety',
    question: "I don't want to go to school because of my skin.",
    problem: "Skin Insecurity",
    solution: "Almost everyone gets acne at this age. See a dermatologist if it's severe. In the meantime, remember that people are looking at your eyes and listening to your words, not counting your spots.",
    category: 'health'
  },
  {
    id: 'divorce',
    question: "My parents are splitting up and I feel like it's my fault.",
    problem: "Family Separation",
    solution: "Your parents' relationship issues are *never* your fault. They are making adult decisions. It's okay to feel angry, sad, or confused. Talk to them about how it's affecting you, or find a support group for teens in similar situations.",
    category: 'personal'
  },
  {
    id: 'identity-struggle',
    question: "I don't know who I am or who I want to be.",
    problem: "Identity Crisis",
    solution: "Your teens are for experimenting! Try different styles, hobbies, and ideas. You don't have to 'pick' a personality and stick to it forever. You are a work in progress, and that's exactly where you should be.",
    category: 'personal'
  },
  {
    id: 'reading-difficulties',
    question: "I struggle to read as fast as my classmates.",
    problem: "Learning Differences",
    solution: "Everyone learns differently. You might have dyslexia or just a different processing style. Ask about audiobooks or speech-to-text tools. Some of the most successful people in the world were 'slow' readers in school.",
    category: 'academic'
  },
  {
    id: 'nervous-habits',
    question: "I bite my nails or pull my hair when I'm stressed.",
    problem: "Anxiety-Driven Habits",
    solution: "These are coping mechanisms. Try giving your hands something else to do, like using a fidget toy or squeezing a stress ball. Identifying *when* you do it can help you address the underlying stressor.",
    category: 'health'
  },
  {
    id: 'favoritism',
    question: "My teacher clearly likes the 'smart kids' better.",
    problem: "Classroom Inequality",
    solution: "Focus on your own progress rather than comparing yourself to others. Effort often counts for more than raw 'smarts' in the long run. If you feel truly ignored, ask for a one-on-one meeting to clarify your learning goals.",
    category: 'academic'
  },
  {
    id: 'bad-reputation',
    question: "One mistake I made is all people talk about.",
    problem: "Reputational Stress",
    solution: "People have short memories. The best way to fix a bad reputation is through consistent, positive actions over time. Be the person you want to be known as, and eventually, the old gossip will fade into the background.",
    category: 'social'
  },
  {
    id: 'phone-distraction',
    question: "I start studying but end up on TikTok for an hour.",
    problem: "Digital Distraction",
    solution: "Put your phone in a different room while you study. Use apps like 'Forest' that reward you for staying off your phone. The 'out of sight, out of mind' rule is the most effective way to beat the scroll.",
    category: 'academic'
  },
  {
    id: 'hobbies-loss',
    question: "I used to love drawing, but now it feels like a chore.",
    problem: "Loss of Interest",
    solution: "You might be experiencing creative burnout. Take a break! Don't force it. Sometimes we need to consume art (visit a gallery, watch a movie) to feel like creating it again. It's okay to outgrow old hobbies too.",
    category: 'personal'
  },
  {
    id: 'awkward-silences',
    question: "I get so nervous that I can't think of anything to say.",
    problem: "Conversation Anxiety",
    solution: "Prepare a few 'go-to' questions: 'Watch anything good lately?' or 'How was your weekend?' If there's a silence, it's not all your responsibility. Take a breath and focus on being a good listener—people appreciate that more than a fast talker.",
    category: 'social'
  },
  {
    id: 'exam-results-fear',
    question: "I'm terrified of getting my results next week.",
    problem: "Result Anxiety",
    solution: "The results are already decided; worrying won't change the numbers. Plan something fun for results day regardless of the outcome. Whether you pass or fail, there is *always* a next step and a path forward.",
    category: 'academic'
  },
  {
    id: 'changing-schools',
    question: "I'm moving to a new school and I'm scared I'll be the 'new kid' forever.",
    problem: "New School Anxiety",
    solution: "Everyone is a little nervous on their first day. Be the first to say hi. Join a sport or club immediately—shared activities are the fastest way to build new bonds. Within a month, you'll feel like you've always been there.",
    category: 'social'
  },
  {
    id: 'physical-fitness',
    question: "I'm the least athletic person in my year.",
    problem: "Physical Insecurity",
    solution: "Not everyone is built for team sports. Try individual activities like swimming, yoga, or even just walking. The goal of fitness is to feel good in your body, not to win every race. Find what feels fun for *you*.",
    category: 'health'
  },
  {
    id: 'overthinking',
    question: "I keep replaying embarrassing moments from 3 years ago.",
    problem: "Ruminating Thoughts",
    solution: "Nobody remembers your 'embarrassing' moment because they're too busy worrying about their own! When an old memory pops up, acknowledge it and then consciously shift your focus to something in the present moment.",
    category: 'personal'
  },
  {
    id: 'boredom',
    question: "I'm always bored and nothing seems exciting.",
    problem: "Chronic Boredom",
    solution: "Boredom is often the gateway to creativity. Instead of reaching for your phone, sit with the boredom for a while. Your brain will eventually start looking for something interesting to do or think about. Try learning a completely new skill.",
    category: 'personal'
  },
  {
    id: 'pet-loss',
    question: "My dog died and my friends think I'm overreacting.",
    problem: "Loss of a Pet",
    solution: "Pets are family members. Your grief is valid. Surround yourself with people who understand the bond between humans and animals. It's okay to cry and miss them deeply; they were a huge part of your life.",
    category: 'personal'
  },
  {
    id: 'sleep-schedule-ruined',
    question: "I stay up until 3 AM and sleep until 1 PM on weekends.",
    problem: "Poor Sleep Hygiene",
    solution: "Try to keep your weekend wakeup time within 2 hours of your weekday time. This prevents 'Social Jetlag.' If you can't sleep, get out of bed and do something boring until you feel tired—don't associate your bed with being awake and frustrated.",
    category: 'health'
  },
  {
    id: 'jealousy',
    question: "I feel jealous when my friends hang out without me.",
    problem: "Friendship Jealousy",
    solution: "Jealousy is a sign that you value the connection. Instead of acting on it, try to build your own separate interests. Healthy friendships have room for other people. Trust that your bond is strong enough to withstand others being there too.",
    category: 'social'
  },
  {
    id: 'public-mistake',
    question: "I tripped in front of the whole cafeteria.",
    problem: "Public Embarrassment",
    solution: "If you laugh at yourself, nobody can laugh *at* you. A quick 'Well, that was graceful!' takes all the power out of the situation. People admire those who can handle small embarrassments with a sense of humor.",
    category: 'personal'
  },
  {
    id: 'undiagnosed-struggle',
    question: "Work seems much harder for me than it does for everyone else.",
    problem: "Possible Learning Gap",
    solution: "Talk to a counselor about being tested for learning styles or neurodiversity (like ADHD). Getting the right 'manual' for your brain can change your entire experience with school. There is no shame in needs help or accommodations.",
    category: 'academic'
  },
  {
    id: 'environmental-anxiety',
    question: "I'm scared about the future of the planet.",
    problem: "Eco-Anxiety",
    solution: "Focus on what you *can* control: recycling, reducing waste, or joining a local environmental group. Taking small actions reduces the feeling of helplessness. The future isn't written yet, and your generation is leading the change.",
    category: 'personal'
  }
];
