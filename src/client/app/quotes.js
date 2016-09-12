const QUOTES = [
  	{ text: 'The best time to plant a tree was 20 years ago.<br>The&nbsp;next&nbsp;best&nbsp;time&nbsp;is&nbsp;now.',
  	  author: 'Chinese Proverb'
  	},

  	{ text: 'Success consists of going from failure to failure without loss&nbsp;of&nbsp;enthusiasm.',
  	  author: 'Winston Churchill'
  	},

    { text: 'Obstacles are those frightful things you see when you take your eyes off&nbsp;the&nbsp;goal.',
      author: 'Henry Ford'
    },

    { text: 'The future starts today, not&nbsp;tomorrow.',
      author: 'Pope John Paul II'
    },

    { text: 'Everything you’ve ever wanted is on the other side&nbsp;of&nbsp;fear.',
      author: 'George Addair'
    },

    { text: 'The extra mile is a vast, unpopulated&nbsp;wasteland.',
      author: 'Jeff Haden'
    },

    { text: 'Failure will never overtake me if my determination to succeed is&nbsp;strong&nbsp;enough.',
      author: 'Og Mandino'
    },

    { text: 'What you do today can improve all&nbsp;your&nbsp;tomorrows.',
      author: 'Ralph Marston'
    },

    { text: 'It does not matter how slowly you go as long as&nbsp;you&nbsp;do&nbsp;not&nbsp;stop.',
      author: 'Confucius'
    },

    { text: 'You are never too old to set another goal or to dream&nbsp;a&nbsp;new&nbsp;dream.',
      author: 'C. S. Lewis'
    },

    { text: 'There is only one corner of the universe you can be certain of improving, and that\'s your&nbsp;own&nbsp;self.',
      author: 'Jeff Haden'
    },

    { text: 'Optimism is the faith that leads to achievement. Nothing can be done without hope&nbsp;and&nbsp;confidence.',
      author: 'Helen Keller'
    },

    { text: 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable&nbsp;of&nbsp;living.',
      author: 'Nelson Mandela'
    },

    { text: 'A journey of a thousand miles must begin with a&nbsp;single&nbsp;step.',
      author: 'Lao Tzu'
    },

    { text: 'Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for&nbsp;you&nbsp;to&nbsp;do.',
      author: 'Pope John XXIII'
    },

    { text: 'Either I will find a way, or I&nbsp;will&nbsp;make&nbsp;one.',
      author: 'Philip Sidney'
    },

    { text: 'The past cannot be changed.<br>The future&nbsp;is&nbsp;yet&nbsp;in&nbsp;your&nbsp;power.',
      author: 'Unknown'
    },

    { text: 'You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget&nbsp;the&nbsp;errand.',
      author: 'Woodrow Wilson'
    },

    { text: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first&nbsp;find&nbsp;yourself.',
      author: 'Mark Caine'
    },

    { text: 'When one must, one&nbsp;can.',
      author: 'Charlotte Whitton'
    },

    { text: 'Develop success from failures. Discouragement and failure are two of the surest stepping stones&nbsp;to&nbsp;success.',
      author: 'Dale Carnegie'
    },

    { text: 'It is never too late to be what you might&nbsp;have&nbsp;been.',
      author: 'George Eliot'
    },

    { text: 'You are today where your thoughts have brought you;&nbsp;you will be tomorrow where your thoughts&nbsp;take&nbsp;you.',
      author: 'James Allen'
    },

    { text: 'I ask not for a lighter burden, but for&nbsp;broader&nbsp;shoulders.',
      author: 'Jewish Proverb'
    },

    { text: 'Opportunity is missed by most people because it is dressed in overalls and looks&nbsp;like&nbsp;work.',
      author: 'Thomas Edison'
    },

    { text: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand&nbsp;new&nbsp;ending.',
      author: 'Carl Bard'
    },

    { text: 'Challenges are what make life interesting,<br>and overcoming them is what makes&nbsp;life&nbsp;meaningful.',
      author: 'Joshua J. Marine'
    },

    { text: 'Success is the sum of small efforts,<br>repeated day-in and&nbsp;day-out.',
      author: 'Robert Collier'
    },

    { text: 'The number one reason people fail in life is because they listen to their friends, family,&nbsp;and&nbsp;neighbors.',
      author: 'Napoleon Hill'
    },

    { text: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach&nbsp;their&nbsp;potential.',
      author: 'John Maxwell'
    },

    { text: 'Today\'s the day!',
      author: 'Mel Fisher (finder of the Atocha)'
    },

    { text: 'It\'s not that I\'m so smart, it’s just that I stay with&nbsp;problems&nbsp;longer.',
      author: 'Albert Einstein'
    },

    { text: 'Permanence, perseverance and persistence in spite of all obstacles, discouragements and impossibilities: It is this, that in all things distinguishes the strong soul from&nbsp;the&nbsp;weak.',
      author: 'Thomas Carlyle'
    },

    { text: 'Let me tell you the secret that has led to my goal. My strength lies solely in&nbsp;my&nbsp;tenacity.',
      author: 'Louis Pasteur'
    },

    { text: 'When you have a great and difficult task, something perhaps almost impossible, if you only work a little at a time, every day a little, suddenly the work will&nbsp;finish&nbsp;itself.',
      author: 'Isak Dinesen'
    },

    { text: 'Success is the child of drudgery and perseverance. It cannot be coaxed or bribed; pay the price and it&nbsp;is&nbsp;yours.',
      author: 'Orison Swett Marden'
    },

    { text: 'A river cuts through rock, not because of its power, but because of&nbsp;its&nbsp;persistence.',
      author: 'Jim Watkins'
    },

    { text: 'If \'Plan A\' didn\'t work, the alphabet has 25&nbsp;more&nbsp;letters.',
      author: 'Unknown'
    },

    { text: 'Ambition is the path to success.<br>Persistence is the vehicle you&nbsp;arrive&nbsp;in.',
      author: 'Bill Bradley'
    },

    { text: 'It always seems impossible until it&nbsp;is&nbsp;done.',
      author: 'Nelson Mandela'
    },

    { text: 'With ordinary talent and extraordinary perseverance, all things are&nbsp;attainable.',
      author: 'Thomas Foxwell Buxton'
    },

    { text: 'When obstacles arise, you change your direction to reach your goal, you do not change your decision to&nbsp;get&nbsp;there.',
      author: ' Zig Ziglar'
    },

    { text: 'Some people dream of success…<br>while others wake up and work&nbsp;hard&nbsp;at&nbsp;it.',
      author: 'Unknown'
    },

    { text: 'He who would do some great thing in this short life, must apply himself to the work with such a concentration of his forces as to the idle spectators, who live only to amuse themselves, looks&nbsp;like&nbsp;insanity.',
      author: 'John Foster'
    },

    { text: 'Conquering any difficulty always gives one a secret joy, for it means pushing back a boundary-line and adding to&nbsp;one\'s&nbsp;liberty.',
      author: 'Henri Frederic Amiel'
    },

    { text: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened&nbsp;for&nbsp;us.',
      author: 'Helen Keller'
    },

    { text: 'You cannot swim for new horizons until you have the courage to&nbsp;lose&nbsp;sight&nbsp;of&nbsp;the&nbsp;shore.',
      author: 'William Faulkner'
    },

    { text: 'I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want&nbsp;to&nbsp;go.',
      author: 'Langston Hughes'
    },

    { text: 'The man who thinks he can and the man who thinks he can\'t are both right. Which&nbsp;one&nbsp;are&nbsp;you?',
      author: 'Henry Ford'
    },

    { text: 'To conquer frustration, one must remain intensely focused on the outcome, not&nbsp;the&nbsp;obstacles.',
      author: 'T.F. Hodge'
    },

    { text: 'The foolish man seeks happiness in the distance. The wise man grows it under&nbsp;his&nbsp;feet.',
      author: 'James Oppenheim'
    },

    { text: 'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations&nbsp;under&nbsp;them.',
      author: 'Henry David Thoreau'
    },

    { text: 'If you want to live a happy life, tie it to a goal, not to people&nbsp;or&nbsp;things.',
      author: 'Albert Einstein'
    },

    { text: 'The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and&nbsp;achieving&nbsp;our&nbsp;mark.',
      author: 'Michelangelo Buonarroti'
    },

    { text: 'Success is not final, failure is not fatal: it is the courage to continue&nbsp;that&nbsp;counts.',
      author: 'Winston Churchill'
    },

    { text: 'Look for something positive in each day, even if some days you have to look&nbsp;a&nbsp;little&nbsp;harder.',
      author: 'Unknown'
    }, 

    { text: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you&nbsp;are&nbsp;doing.',
      author: 'Pele'
    },

    { text: 'Create the highest, grandest vision possible for your life, because you become what&nbsp;you&nbsp;believe.',
      author: 'Oprah Winfrey'
    },

    { text: 'Difficult roads often lead to beautiful&nbsp;destinations.',
      author: 'Unknown'
    },

    { text: 'In the end, we only regret the chances we&nbsp;didn\'t&nbsp;take.',
      author: 'Unknown'
    },

    { text: 'If you don\'t build your dream, someone else will hire you to help them&nbsp;build&nbsp;theirs.',
      author: 'Tony A. Gaskins Jr.'
    },

    { text: 'It\'s hard to beat a person who NEVER&nbsp;GIVES&nbsp;UP.',
      author: 'Babe Ruth'
    },

    { text: 'Don\'t let the noise of other peoples\' opinions drown out your own&nbsp;inner&nbsp;voice.',
      author: 'Steve Jobs'
    },

    { text: 'Far and away the best prize that life offers is the chance to work hard at work&nbsp;worth&nbsp;doing.',
      author: 'Theodore Roosevelt'
    },

    { text: 'I\'ve failed over and over and over again in my life. And that is why&nbsp;I&nbsp;succeed.',
      author: 'Michael Jordan'
    },

    { text: 'The most difficult thing is the decision to act, the rest is&nbsp;merely&nbsp;tenacity.',
      author: 'Amelia Earhart'
    },

    { text: 'The only person you are destined to become is the person you decide&nbsp;to&nbsp;be.',
      author: 'Ralph Waldo Emerson'
    }
  ]

  export default QUOTES;