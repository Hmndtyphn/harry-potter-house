const db = require('./connection');
const { User, Subject, Question } = require('../models');

db.once('open', async () => {
    
    await Question.deleteMany();

    const questions = await Question.insertMany([
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
            answerOptions: ['Delumos', 'Tenebrae', 'Nox', 'Noir'],
            isCorrect: 'Nox',
            // subject: classes[1]._id,
            year: [1]
        },
        {
            question: "What spell is used to open locked doors",
            answerOptions: ['Incendio', 'Reparo', 'Revelio', 'Alohomora'],
            isCorrect: 'Alohomora',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What is the counter charm to Engorgio?",
            answerOptions: ['Imperio', 'Reducto', 'Reducio', 'Obliviate'],
            isCorrect: 'Reducio',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What does the spell Petrificus Totalus do?",
            answerOptions: ['Prevent receiver from speaking', 'Temporarily paralyze receiver', 'Hang upside down in the air', 'Sets receiver on fire'],
            isCorrect: 'Temporarily paralyze receiver',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What charm is used to bring the statues that protect Hogwarts to life?",
            answerOptions: ['Petrificus Totalus', 'Homenum Revelio', 'Priori Incanto', 'Piertotum Locomotor'],
            isCorrect: 'Piertotum Locomotor',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What charm is used to bring the statues that protect Hogwarts to life?",
            answerOptions: ['Petrificus Totalus', 'Homenum Revelio', 'Priori Incanto', 'Piertotum Locomotor'],
            isCorrect: 'Piertotum Locomotor',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What spell is used to conjure the Dark Mark?",
            answerOptions: ['Imperio', 'Impedimenta', 'Sectumsempra', 'Morsmordre'],
            isCorrect: 'Morsmordre',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What type of spell is Expecto Patronum?",
            answerOptions: ['Hex', 'Curse', 'Charm', 'Jinx'],
            isCorrect: 'Charm',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What type of spell is Expecto Patronum?",
            answerOptions: ['Hex', 'Curse', 'Charm', 'Jinx'],
            isCorrect: 'Charm',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What is the counter-jinx for Levicorpus?",
            answerOptions: ['Liberacorpus', 'Viberacorpus', 'Rennervate', 'Legilimens'],
            isCorrect: 'Liberacorpus',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What does the spell Serpensortia do?",
            answerOptions: ['Cuts the target', 'Paralyzes the target', 'Emits a great light', 'Conjures a snake from the end of the wand'],
            isCorrect: 'Conjures a snake from the end of the wand',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What is the spell Anapneo used for?",
            answerOptions: ['Clearing someones airways if choking', 'Make invisible ink disappear', 'Protection against hexes'],
            isCorrect: 'Clearing someones airways if choking',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "Who created the spell Sectum Sempra",
            answerOptions: ['Gilderoy Lockhart', 'Albus Dumbledore', 'Severus Snape', 'Remus Lupin'],
            isCorrect: 'Severus Snape',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What charm is used to make objects levitate?",
            answerOptions: ['Levicorpus', 'Morbiliarbus', 'Locomotor', 'Wingardium Leviosa'],
            isCorrect: 'Wingardium Leviosa',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What spell can be used to turn stairs into a slide?",
            answerOptions: ['Fidelius', 'Oppugno', 'Waddiwasi', 'Glisseo'],
            isCorrect: 'Glisseo',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What does Densaugeo do?",
            answerOptions: ['Causes victims front teeth to grow', 'Causes victim to grow pig tail', 'Causes victim to vomit slugs', 'Causes victims skin to break out in boils'],
            isCorrect: 'Causes victims front teeth to grow',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "What spell stuns your opponent?",
            answerOptions: ['Imperium', 'Stupefy', 'Silencio', 'Reducto'],
            isCorrect: 'Stupefy',
            // subject: classes[2]._id,
            year: [1]
        },
        {
            question: "How did Hogwarts History of Magic teacher, Professor Binns die?",
            answerOptions: ['He fell down some stairs', 'A heavy book fell on him', 'He was killed by Lord Voldemort', 'He died in his sleep'],
            isCorrect: 'He died in his sleep',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "On which floor would you find the Room of Requirement?",
            answerOptions: ['first', 'fourth', 'sixth', 'seventh'],
            isCorrect: 'seventh',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "What fruit do you have to tickle to enter the Hogwarts kitchens?",
            answerOptions: ['orange', 'melon', 'pear', 'strawberry'],
            isCorrect: 'pear',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "When was the Chamber of Secrets opened?",
            answerOptions: ['1913', '1967', '1943', '1992'],
            isCorrect: '1943',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "Beedle the Bard's 'Tale of the Three Brothers' was based on the true story of which ancient wizarding family?",
            answerOptions: ['The Gaunts', 'The Blacks', 'The Peverells', 'The Selwyns'],
            isCorrect: 'The Peverells',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "When did Albus Dumbledore defeat Gellert Grindelwald in their famous wizarding duel?",
            answerOptions: ['1928', '1913', '1965', '1945'],
            isCorrect: '1945',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "What kind of creatures work in the Hogwarts kitchen?",
            answerOptions: ['goblins', 'elves', 'trolls', 'centaurs'],
            isCorrect: 'elves',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "According to medieval folklore, unicorns can only be caught by...?",
            answerOptions: ['Witches and warlocks', 'Female virgins', 'Children', 'Male virgins'],
            isCorrect: 'Female virgins',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "How many staircase would you find in Hogwarts?",
            answerOptions: ['103', '142', '250', '310'],
            isCorrect: '142',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "If it's your first year, how would you get to school after the train?",
            answerOptions: ['boats', 'broomstick', 'walking', 'flying car'],
            isCorrect: 'boats',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "What kind of statue leads to the stairs of the headmaster's office?",
            answerOptions: ['snake', 'phoenix', 'eagle', 'griffon'],
            isCorrect: 'griffon',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "Behind which statue?",
            answerOptions: ['Wilfred the Wistful', 'Gregory the Smarmy', 'Lachlan the Lanky', 'Gunhilda de Gorsemoor'],
            isCorrect: 'Gunhilda de Gorsemoor',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "Phoenix are historically associated with...?",
            answerOptions: ['The forest', 'The desert', 'The sea', 'The sun'],
            isCorrect: 'The sun',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "The sorting hat is a staple at Hogwarts. Who did the sorting hat originally belong to?",
            answerOptions: ['Godric Gryffindor', 'Rowena Ravenclaw', 'Salazar Slytherin', 'Helga Hufflepuff'],
            isCorrect: 'Godric Gryffindor',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "Who is the only Hogwarts professor who teaches as a ghost?",
            answerOptions: ['Lupin', 'Quirrell', 'Flitwick', 'Binns'],
            isCorrect: 'Binns',
            // subject: classes[3]._id,
            year: [1]
        },
        {
            question: "You would be most hurt if a person called you...?",
            answerOptions: ['Weak', 'Ignorant', 'Unkind', 'Boring'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "What material is at the core of your wand?",
            answerOptions: ['Phoenix Feather', 'Dragon Heartstring', 'Unicorn Hair', 'Veela Hair'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "Which of your skills are you most proud of?",
            answerOptions: ['Ability to make new friends', 'Ability to get what I want', 'Ability to absorb new info', 'Ability to keep secrets'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "What role are you playing in Quidditch",
            answerOptions: ['Seeker', 'Chaser', 'Beater', 'Spectator'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "What pet do you bring to Hogwarts?",
            answerOptions: ['Owl', 'Cat', 'Toad', 'Nothing'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "What would you see in the Mirror of Erised",
            answerOptions: ['Myself, surrounded by riches', 'Myself, surrounded by family', 'Myself, knowledgeable above all', 'Myself, experiencing an adventure'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "Which of these magical events would you most like to experience?",
            answerOptions: ['Triwizard Tournament', 'Quidditch world Cub', 'The Yule Ball', 'Christmas at Hogwarts'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "Choose a Deathly Hallow.",
            answerOptions: ['The Elder Wand', 'The Resurrection Stone', 'The Cloak of Invisibility', 'None'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "Given the choice, would you rather invent a potion that would guarantee you",
            answerOptions: ['Glory', 'Wisdom', 'Love', 'Power'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "What kind of instrument most pleases your ear?",
            answerOptions: ['Violin', 'Drums', 'Piano', 'Trumpet'],
            // subject: classes[5]._id,
            year: [1]
        },
        {
            question: "which Hogwarts house do you feel you identify with most closely",
            answerOptions: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
            // subject: classes[5]._id,
            year: [1]
        }
    ])
    console.log('Questions seeded')

    await Subject.deleteMany();
    const subjects = await Subject.insertMany([
        {
            name: 'transfiguration',
            alias: 'Transfiguration',
            description: 'ipsum lorem',
            professor: 'Minerva McGonagall',
            image: 'professor_mcgonagall',
            questions: [questions[0], questions[1], questions[2], questions[3], questions[4], questions[5], questions[6], questions[7], questions[8], questions[9], questions[10], questions[11], questions[12], questions[13], questions[14]],
            year: [1, 2, 3]
        },
        {
            name: 'potions',
            alias: 'Potions',
            description: 'ipsim lorem',
            professor: 'Severus Snape',
            image: 'professor_snape',
            questions: [questions[30], questions[31], questions[32], questions[33], questions[34], questions[35], questions[36], questions[37], questions[38], questions[39], questions[40], questions[41], questions[42], questions[43], questions[44], questions[45]],
            year: [1, 2, 3]
        },
        {
            name: 'charms',
            alias: 'Charms',
            description: 'ipsim lorem',
            professor: 'Filius Flitwick',
            image: 'professor_flitwick',
            questions: [questions[46], questions[47], questions[48], questions[49], questions[50], questions[51], questions[52], questions[53], questions[54], questions[55], questions[56], questions[57], questions[58], questions[59], questions[60], questions[61]],
            year: [1, 2, 3]
        },
        {
            name: 'historyofmagic',
            alias: 'History of Magic',
            description: 'ipsim lorem',
            professor: 'Cuthbert Binns',
            image: 'professor_binns.jpeg',
            questions: [questions[62], questions[63], questions[64], questions[65], questions[66], questions[67], questions[68], questions[69], questions[70], questions[71], questions[72], questions[73], questions[74], questions[75], questions[76]],
            year: [1, 2, 3]
        },
        {
            name: 'darkarts',
            alias: 'Defense Against the Dark Arts',
            description: 'ipsum lorem',
            professor: 'Quirinus Quirrell',
            image: 'professor_quirrell',
            questions: [questions[15], questions[16], questions[17], questions[18], questions[19], questions[20], questions[21], questions[22], questions[23], questions[24], questions[25], questions[26], questions[27], questions[28], questions[29]],
            year: [1, 2, 3]
        },
        {
            name: 'sorting',
            description: 'ipsim lorem',
            professor: 'Sorting Hat',
            image: 'great_hall_sorting',
            questions: [questions[77], questions[78], questions[79], questions[80], questions[81], questions[82], questions[83], questions[84], questions[85], questions[86], questions[87]],
            year: [1]
        }
    ])
    console.log('Subjects seeded.')


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
            username: "colon_hunter",
            email: "kingcolon@gmail.com",
            password: "123456"
        }, 

    ])
    console.log('Users seeded.')

    console.log('All seeds added')
    process.exit();
})