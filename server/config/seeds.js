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
        },
        {
            name: 'charms',
            description: 'ipsim lorem',
            professor: 'Filius Flitwick',
            image: 'professor_snape',
            year: [1, 2, 3]
        },
        {
            name: 'history of magic',
            description: 'ipsim lorem',
            professor: 'Cuthbert Binns',
            image: 'professor_binns',
            year: [1, 2, 3]
        },
        {
            name: 'defense against the dark arts',
            description: 'ipsum lorem',
            professor: 'Quirinus Quirrell',
            image: 'professor_quirrell',
            year: [1]
        },
        {
            name: 'sorting',
            description: 'ipsim lorem',
            professor: 'Sorting Hat',
            image: 'sorting_hat',
            year: [1]
        }
    ])
    console.log('Classes seeded.')

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
    console.log('Questions seeded')

    console.log('All seeds added')
    process.exit();
})