const db = require('./connection');
const { User, Class, Trivia } = require('../models');

db.once('open', async () => {
    await Class.deleteMany();
    const classes = await Class.insertMany([
        {
            name: 'transfiguration',
            description: 'ipsum lorem',
            professor: 'Minerva McGonagall',
            image: 'professor_mcgonagall',
            year: [1, 2, 3]
        },
        {
            name: 'potions',
            description: 'ipsim lorem',
            professor: 'Severus Snape',
            image: 'professor_snape',
            year: [1, 2, 3]
        }
    ])

    await Trivia.deleteMany();

    const quizzes = await Trivia.insertMany([
        {
            question: "Whose nickname is The Boy Who Lived?",
            answerOptions: ['Marvolo Riddle', 'Albus Dumbledore', 'Harry Potter', 'Ron Weasley'],
            isCorrect: 'Harry Potter',
            subject: classes[0]._id,
            year: [1]
        }
    ])

    console.log('All seeds added')
    process.exit();
})