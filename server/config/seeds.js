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
            question: "Who is the author of A Beginner's Guide to Transfiguration?",
            answerOptions: ['Gilderoy Lockhart', 'Emerick Switch', 'Newt Scamander', 'Miranda Goshawk'],
            isCorrect: 'Emerick Switch',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "True or False: Professor Dumbledore taught Transfiguration?",
            answerOptions: ['True', 'False'],
            isCorrect: 'True',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In Harry Potter and the Sorcerer's Stone, Which animal did Harry have to transform into a Snuffbox during their first-year exam?",
            answerOptions: ['Mouse', 'Pig', 'Squirrel', 'Ferret'],
            isCorrect: 'Mouse',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In Harry's first Transfiguration class, what animal does Professor McGonagall turn her desk into?",
            answerOptions: ['Dog', 'Cow', 'Goat', 'Pig'],
            isCorrect: 'Pig',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What type of cat does Professor McGonagall change into?",
            answerOptions: ['British Shorthair', 'Siamese', 'Tabby', 'Russian Blue'],
            isCorrect: 'Tabby',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In the book Harry Potter and the Sorcerer's Stone, Percy talks to Hermione about Transfiguration at the start of term feast, what does he tell her she'll be starting off with?",
            answerOptions: ['Mice into snuff boxes', 'Matches into needles', 'Paper into silk', 'Quaffles into pumpkins'],
            isCorrect: 'Matches into needles',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In which publication would you find articles about Transfiguration?",
            answerOptions: ['Change it up', 'Transfiguration Today', 'Transfiguration Tomorrow', 'Time for Tansfiguration'],
            isCorrect: 'Transfiguration Today',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "How many Principal Exceptions are there to Gamp's Law of Transfiguration?",
            answerOptions: ['Three', 'Twelve', 'Seven', 'Five'],
            isCorrect: 'Five',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "According to most wizards, which subject is Transfiguration most like?",
            answerOptions: ['Math', 'Science', 'Psychology', 'Philosphy'],
            isCorrect: 'Science',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "Fill in the blank: The intended tansformation is directly influenced by body weight, viciousness, _______, concentration and a fifth unknown variable.",
            answerOptions: ['wand angle', 'wand power', 'wand skill', 'wand length'],
            isCorrect: 'wand power',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "Which form of Transfiguration allows you to change into an animal while retaining all of your mental capacities?",
            answerOptions: ['Human Transfiguration', 'Animagus', 'Conjuration', 'None of the above'],
            isCorrect: 'Animagus',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What is a true limitation of Transfiguration?",
            answerOptions: ['You cannot transfigure in the Room of Requirement', 'You cannot transfigure into someone you love', 'You cannot transfigure the dead back to life', 'There are no limitations'],
            isCorrect: 'You cannot transfigure the dead back to life',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What is a true limitation on conjuring?",
            answerOptions: ['You cannot conjure a person', 'You cannot conjure food', 'You can only conjure something if you really need it', 'There are no conjuring limitations'],
            isCorrect: 'You cannot conjure food',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What spell can be performed to remedy a mistakenly half-transfigured object?",
            answerOptions: ['Conjuracto', 'Fixilito', 'Reparifarge', 'You cannot fix a half-transfigured object'],
            isCorrect: 'Reparifarge',
            subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What incantation do you use to vanish an object?",
            answerOptions: ['Disapporo', 'Evanesco', 'Escorio', 'Lumos'],
            isCorrect: 'Evanesco',
            subject: classes[0]._id,
            year: [1]
        }
    ])
    console.log('Questions seeded')

    await User.deleteMany()

    const user = await User.insertMany([
        {
            username: "Timmons51",
            email: "timmons@gmail.com",
            password: "123456"
        }, 
        {
            username: "Salazar",
            email: "slytherin@gmail.com",
            password: "123456"
        }, 
        {
            username: "Harvey",
            email: "Harvey@gmail.com",
            password: "123456"
        }, 
        {
            username: "colon_King",
            email: "kingcolon@gmail.com",
            password: "123456"
        }, 

    ])

    console.log('All seeds added')
    process.exit();
})