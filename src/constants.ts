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
  }
];
