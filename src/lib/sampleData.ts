export type SocialPost = {
    id: string;
    timestamp: string;
    author: string;
    platform: 'facebook' | 'twitter' | 'threads' | 'linkedin';
    content: string;
};

export const sampleData: Array<SocialPost> = [
    {
        id: '6ca7b5f5-4f2e-4d16-a3c5-2a7d0511e315',
        timestamp: '2023-10-15T08:30:00Z',
        author: 'user123',
        platform: 'twitter',
        content:
            'Exciting news! Just landed my dream job. Grateful for the journey and looking forward to new challenges. #CareerMove',
    },
    {
        id: 'a8bf9d21-0a68-4a63-aae8-1502c1fe7f85',
        timestamp: '2023-09-05T14:45:00Z',
        author: 'JaneDoe',
        platform: 'facebook',
        content:
            "Sunday vibes! 🌞 Enjoying a cup of coffee and a good book. What's your favorite way to relax on the weekend?",
    },
    {
        id: '1e7b8138-d0c3-47b0-a4b6-9ff9be4a79e1',
        timestamp: '2023-08-20T18:12:00Z',
        author: 'business_guru',
        platform: 'linkedin',
        content:
            'Thrilled to announce the launch of our new product line! Thank you to the amazing team for their hard work. #Innovation #BusinessSuccess',
    },
    {
        id: '3f4c08c9-0d6f-4a69-bb4a-ec19b2f3c19d',
        timestamp: '2023-07-10T09:55:00Z',
        author: 'adventurelover',
        platform: 'threads',
        content: 'Just hiked to the summit of Mount Everest! 🏔️ What an incredible journey. #BucketListChecked',
    },
    {
        id: '5b09cbb4-12e1-45ef-a6e2-5e70395bc2ad',
        timestamp: '2023-06-25T20:20:00Z',
        author: 'tech_enthusiast',
        platform: 'twitter',
        content: 'Latest tech gadgets unveiled at the expo blew my mind! The future is here. #TechInnovation #Gadgets',
    },
    {
        id: '86b9c906-3a2f-4e49-91a5-d804ee0f5f61',
        timestamp: '2023-05-12T12:30:00Z',
        author: 'fitness_freak',
        platform: 'facebook',
        content:
            'Completed my first marathon today! 🏃‍♂️ Feeling accomplished and ready for the next challenge. #FitnessGoals',
    },
    {
        id: 'c5a05bbf-3e7c-4950-b04a-99888864fb37',
        timestamp: '2023-04-05T15:15:00Z',
        author: 'coding_ninja',
        platform: 'linkedin',
        content:
            'Successfully launched my new app! Big shoutout to the coding community for the support. #AppDevelopment #Programming',
    },
    {
        id: '2efef43a-1583-4e71-9476-5a07ab5c823a',
        timestamp: '2023-03-20T08:45:00Z',
        author: 'foodie_adventures',
        platform: 'threads',
        content:
            'Exploring street food in Tokyo! 🍜 So many flavors and textures. Any recommendations for must-try dishes?',
    },
    {
        id: 'f8b2e58a-858a-4ed2-9b7d-64ba01b440f8',
        timestamp: '2023-02-10T17:30:00Z',
        author: 'bookworm',
        platform: 'twitter',
        content: 'Just finished an amazing novel. Any book recommendations for my next read? 📚 #BookLovers',
    },
    {
        id: '1d3d155a-dbd5-43eb-a4c4-9a9b27f2a5b7',
        timestamp: '2022-12-28T22:00:00Z',
        author: 'travel_enthusiast',
        platform: 'facebook',
        content:
            "Reflecting on the incredible places visited in 2022. What's your favorite travel memory from this year?",
    },
    {
        id: 'e8a77215-50bb-4ee2-914f-9a3ebf7899cd',
        timestamp: '2022-11-15T14:55:00Z',
        author: 'finance_whiz',
        platform: 'linkedin',
        content:
            "Sharing insights on sustainable investments and their impact on the financial landscape. Let's build a better future together. #SustainableFinance",
    },
    {
        id: 'cd5030c4-7a09-4aae-8f18-4a91c4a2d5a3',
        timestamp: '2022-10-05T09:10:00Z',
        author: 'music_lover',
        platform: 'threads',
        content:
            "Attended an amazing live concert last night! The energy was unreal. 🎶 What's your favorite concert experience?",
    },
    {
        id: '524f44b1-e7bf-4e3d-bb62-5d8881705d6d',
        timestamp: '2022-09-20T19:40:00Z',
        author: 'motivational_speaker',
        platform: 'twitter',
        content:
            'Embrace challenges as opportunities for growth. Your mindset determines your success. #MotivationMonday #PositiveVibes',
    },
    {
        id: '3f8f64d6-ae4d-4c8e-aec2-eb9c53f77ea1',
        timestamp: '2022-08-10T12:15:00Z',
        author: 'yoga_journey',
        platform: 'facebook',
        content:
            'Starting the day with yoga and meditation. Grateful for the positive energy it brings. 🧘‍♀️ #Mindfulness #Wellness',
    },
];
