const db = require('./connection');
const { User, Class, Trivia } = require('../models');

db.once('open', async () => {
    
    await Trivia.deleteMany();

    const quizzes = await Trivia.insertMany([
        {
            question: "Who is the author of A Beginner's Guide to Transfiguration?",
            answerOptions: ['Gilderoy Lockhart', 'Emerick Switch', 'Newt Scamander', 'Miranda Goshawk'],
            isCorrect: 'Emerick Switch',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "True or False: Professor Dumbledore taught Transfiguration?",
            answerOptions: ['True', 'False'],
            isCorrect: 'True',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In Harry Potter and the Sorcerer's Stone, Which animal did Harry have to transform into a Snuffbox during their first-year exam?",
            answerOptions: ['Mouse', 'Pig', 'Squirrel', 'Ferret'],
            isCorrect: 'Mouse',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In Harry's first Transfiguration class, what animal does Professor McGonagall turn her desk into?",
            answerOptions: ['Dog', 'Cow', 'Goat', 'Pig'],
            isCorrect: 'Pig',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What type of cat does Professor McGonagall change into?",
            answerOptions: ['British Shorthair', 'Siamese', 'Tabby', 'Russian Blue'],
            isCorrect: 'Tabby',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In the book Harry Potter and the Sorcerer's Stone, Percy talks to Hermione about Transfiguration at the start of term feast, what does he tell her she'll be starting off with?",
            answerOptions: ['Mice into snuff boxes', 'Matches into needles', 'Paper into silk', 'Quaffles into pumpkins'],
            isCorrect: 'Matches into needles',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "In which publication would you find articles about Transfiguration?",
            answerOptions: ['Change it up', 'Transfiguration Today', 'Transfiguration Tomorrow', 'Time for Tansfiguration'],
            isCorrect: 'Transfiguration Today',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "How many Principal Exceptions are there to Gamp's Law of Transfiguration?",
            answerOptions: ['Three', 'Twelve', 'Seven', 'Five'],
            isCorrect: 'Five',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "According to most wizards, which subject is Transfiguration most like?",
            answerOptions: ['Math', 'Science', 'Psychology', 'Philosphy'],
            isCorrect: 'Science',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "Fill in the blank: The intended tansformation is directly influenced by body weight, viciousness, _______, concentration and a fifth unknown variable.",
            answerOptions: ['wand angle', 'wand power', 'wand skill', 'wand length'],
            isCorrect: 'wand power',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "Which form of Transfiguration allows you to change into an animal while retaining all of your mental capacities?",
            answerOptions: ['Human Transfiguration', 'Animagus', 'Conjuration', 'None of the above'],
            isCorrect: 'Animagus',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What is a true limitation of Transfiguration?",
            answerOptions: ['You cannot transfigure in the Room of Requirement', 'You cannot transfigure into someone you love', 'You cannot transfigure the dead back to life', 'There are no limitations'],
            isCorrect: 'You cannot transfigure the dead back to life',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What is a true limitation on conjuring?",
            answerOptions: ['You cannot conjure a person', 'You cannot conjure food', 'You can only conjure something if you really need it', 'There are no conjuring limitations'],
            isCorrect: 'You cannot conjure food',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What spell can be performed to remedy a mistakenly half-transfigured object?",
            answerOptions: ['Conjuracto', 'Fixilito', 'Reparifarge', 'You cannot fix a half-transfigured object'],
            isCorrect: 'Reparifarge',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "What incantation do you use to vanish an object?",
            answerOptions: ['Disapporo', 'Evanesco', 'Escorio', 'Lumos'],
            isCorrect: 'Evanesco',
            // subject: classes[0]._id,
            year: [1]
        },
        {
            question: "Which defense against the dark arts professor had a classroom that smelled like garlic?",
            answerOptions: ["Professor Moody", "Professor Quirell", "Professor Lupin", "Professor Lockhart"],
            isCorrect: 'Professor Quirell',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "In the Goblet of Fire, What is the Unforgiveable Curse that Professor Moodt demonstartes on the spider?",
            answerOptions: ['Cruciatus Curse','Imperius Curse', 'Killing Curse', 'None of the above'],
            isCorrect: 'Imperius Curse',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What Is The Name Of The Author That Wrote The First-Year Textbook, The Dark Forces: A Guide to Self-Protection?",
            answerOptions: ['Gulliver Pokeby', 'Libatius Borage', 'Eldred Worple', 'Quentin Trimble'],
            isCorrect: 'Quentin Trimble',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "Who Wrote The Book, Wanderings With Werewolves?",
            answerOptions: ['Bathilda Bagshot', 'Remus Lupin', 'Bill Weasley', 'Gilderoy Lockhart'],
            isCorrect: 'Gilderoy Lockhart',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What year do students learn non-verbal spells?",
            answerOptions: ['2', '4', '6', '7'],
            isCorrect: '6',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What comes out of your wand when you use the Verdimillious spell?",
            answerOptions: ['Green Sparks', 'Red Sparks', 'Water', 'Fire'],
            isCorrect: 'Green Sparks',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What does the Periculum spell do?",
            answerOptions: ['Paralyze enemies', 'Speed up a broom', 'Create a signal flare', 'Illuminate a room'],
            isCorrect: 'Create a signal flare',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "True or false: The Homorphus charm can cure a werewolf.",
            answerOptions: ['True', 'False'],
            isCorrect: 'False',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What is another name for Petrificus Totalus?",
            answerOptions: ['Hanging Curse', 'Full body binding', 'The killing curse', 'Love Spell'],
            isCorrect: 'Full body binding',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What fruit will your head end up in if the Melofors jinx is performed on you?",
            answerOptions: ['Apple', 'Banana', "Pumpkin", 'Peach'],
            isCorrect: 'Pumpkin',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "True or false: Every boggart looks different.",
            answerOptions: ['True', 'False'],
            isCorrect: 'True',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What's the best spell to use against a boggart?",
            answerOptions: ['Riddikulus', 'Levicorpus', 'Avada Kedavara', 'Reparo'],
            isCorrect: 'Riddikulus',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What does the Imperius curse give to the person who casts it?",
            answerOptions: ['Extraordinary Wealth', 'Eternal life', 'Complete control over another person', 'Amazing strength'],
            isCorrect: 'Complete control over another person',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "How many unforgiveable curses are there in the wizarding world?",
            answerOptions: ['3', '5', '6', '12'],
            isCorrect: '3',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What does the Diminuendo spell do?",
            answerOptions: ['Shrink an object', 'Expand an object', 'Make an object disappear', 'Dispell an enemy wizards attack'],
            isCorrect: 'Shrink an object',
            // subject: classes[4]._id,
            year: [1]
        },
        {
            question: "What is the ideal starter cauldron?",
            answerOptions: ['Gold', 'Copper', 'Pewter', 'Brass'],
            isCorrect: 'Pewter',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What does a polyjuice potion do?",
            answerOptions: ['Assume the form of someone else', 'Shrinks the recipient', 'Makes someone tell the truth', 'Causes hysterical laughters'],
            isCorrect: 'Assume the form of someone else',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What does a bezoar do?",
            answerOptions: ['Helps heal wounds', 'The final ingredient in polyjuice potion', 'The antidote to most poisons', 'None of the above'],
            isCorrect: 'The antidote to most poisons',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "How many uses for dragon blood are there?",
            answerOptions: ['10', '11', '12', '13'],
            isCorrect: '12',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What color is Felix Felicis?",
            answerOptions: ['Silver', 'Pink', 'Green', 'Gold'],
            isCorrect: 'Gold',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "In the first lesson with Snape, what is the first potion the class learn to make?",
            answerOptions: ['An antidote', 'Polyjuice', 'Confusing Concoction', 'A potion to cure boils'],
            isCorrect: 'A potion to cure boils',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What colour is a Shrinking Solution?",
            answerOptions: ['Glimmering gold', 'Acid green', 'Bright orange', 'Midnight blue'],
            isCorrect: 'Acid green',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What O.W.L. result did Harry get in Potions?",
            answerOptions: ['Outstanding', 'Troll', 'Exceeds expectations', 'Acceptable'],
            isCorrect: 'Exceeds expectations',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "Who was the writer of Magical Drafts and Potions?",
            answerOptions: ['Arsenius Jigger', 'Emeric Switch', 'Phyllida Spore', 'Adalbert Waffling'],
            isCorrect: 'Arsenius Jigger',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "Which potion is distinctive because of its mother-of-pearl sheen?",
            answerOptions: ['Pepperup Potion', 'Amortentia', 'Elixir of Life', 'None of the above'],
            isCorrect: 'Amortentia',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "Which potion did poor Trevor the toad have to test out?",
            answerOptions: ['Shrinking Solution', 'Strengthening Solution', 'Swelling Solution', 'Scintillation Solution'],
            isCorrect: 'Shrinking Solution',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What colour is Veritaserum?",
            answerOptions: ['Sliver', 'Frothy White', 'Green', 'Clear'],
            isCorrect: 'Clear',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "Which of the following is an ingredient in Strengthening Solution?",
            answerOptions: ['Pomegranate Juice', 'Rat tails', 'Shrivelfig', 'Salamander blood'],
            isCorrect: 'Salamander blood',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "Armadillo bile, scarab beetles, and ginger roots are all used in which potion?",
            answerOptions: ['Deflating Draught', 'Invigoration Draught', 'Felix Felicis', 'Wit-Sharpening Potion'],
            isCorrect: 'Wit-Sharpening Potion',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What is the deadliest potion?",
            answerOptions: ['Forgetfulness Potion', 'Veritaserum', 'Wideye Potion', 'Swelling Solution'],
            isCorrect: 'Veritaserum',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What is the counterspell for Lumos?",
            answerOptions: ['Delumos', 'Tenebrae', 'Knox', 'Noir'],
            isCorrect: 'Knox',
            // subject: classes[1]._id,
        }
    ])
    console.log('Questions seeded')

    await Class.deleteMany();
    const classes = await Class.insertMany([
        {
            name: 'transfiguration',
            description: 'ipsum lorem',
            professor: 'Minerva McGonagall',
            image: 'professor_mcgonagall',
            quizzes: [quizzes[0], quizzes[1], quizzes[2]],
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
            username: "RavenclawHermione",
            email: "harveyb@gmail.com",
            password: "123456"
        }, 
        {
            username: "colon_King",
            email: "kingcolon@gmail.com",
            password: "123456"
        }, 

    ])
    console.log('Users seeded.')

    console.log('All seeds added')
    process.exit();
})