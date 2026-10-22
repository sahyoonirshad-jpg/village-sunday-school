
import { supabase } from "./supabase";

/* Village Sunday School Companion: the original single-page app, mounted into <div id="app"> by app/companion.tsx. */
export function mount(){

/* ---------- fixed 30-minute plan ---------- */
const SEGS=[["opening",2,"--seg-open"],["story",7,"--seg-story"],["questions",5,"--seg-q"],["game1",5,"--seg-game"],["game2",5,"--seg-game"],["activity",4,"--seg-act"],["prayer",2,"--seg-pray"]];

/* ---------- UI words ---------- */
const T={
en:{app:"Village Sunday School Companion",tag:"A ready 30-minute lesson with games that match the story",
 online:"Online · new lessons on",offline:"Offline · ready-made & saved lessons",noai:"Ready-made & saved lessons",
 plan:"Plan this Sunday's lesson",story:"Bible story",age:"Age group",time:"Lesson time",min30:"30 minutes",
 quick:"Ready-made lessons (open instantly, even offline)",or:"Or type any Bible story for a brand-new lesson",
 ph:"e.g. Ruth and Naomi, Joseph's coat, The ten lepers",make:"Make lesson",stop:"Stop",
 writing:"Writing your lesson… usually under a minute",words:"words so far",
 needNet:"You're offline. New lessons need internet. Open a ready-made or saved lesson below.",
 needApp:"New lessons work when this page is opened from its Claude link with internet. Ready-made and saved lessons work here.",
 ages:{"4-6":"Ages 4–6","7-9":"Ages 7–9","10-13":"Ages 10–13","mixed":"Mixed ages"},
 seg:{opening:"Welcome",story:"Tell the story",questions:"Talk about it",game1:"Game 1",game2:"Game 2",activity:"Activity",prayer:"Closing prayer"},
 verse:"Memory verse",big:"Big idea",bring:"Bring:",tips:"Acting it out",ageTip:"For your age group",
 link:"How it links to the story",mat:"Materials:",steps:"How to play",
 copy:"Copy lesson",copied:"Lesson copied",copyFail:"Copy didn't work here. Select the text and copy it by hand.",
 regen:"New games",regenning:"Finding new games…",
 readyMade:"Ready-made",mine:"My Lessons",mineHint:"Lessons you save are kept in your account, so they open on any phone or computer where you sign in.",
 mineEmpty:"No saved lessons yet. Open a ready-made lesson and press Save to My Lessons.",
 saveBtn:"Save to My Lessons",savedDone:"Saved ✓",loading:"Loading your lessons…",
 saveFail:"Couldn't reach your saved lessons. Check your internet and try again.",
 del:"Remove",undo:"Undo",removed:"Lesson removed",
 offTitle:"Keep it on your phone",offText:"Save the whole companion as one file, with all ready-made lessons and your saved lessons. Open it in your phone's browser any time, with no internet.",
 dl:"Download for offline",dlDone:"Saved. Open the file from your phone's Downloads.",dlNo:"Download was cancelled.",
 savedAs:"Saved to My Lessons",madeIn:"This lesson is in English. Switch language and make it again for Urdu.",
 readBible:"Read the verse from your own Bible with the children.",
 signin:"Sign in",signup:"Create account",welcome:"Welcome, teacher",user:"Email",pass:"Password",useDemo:"Use demo account",
 demoInfo:"Demo account",badLogin:"That email or password is wrong. Try the demo account.",signout:"Sign out",
 toSignup:"New teacher? Create an account",toSignin:"Already have an account? Sign in",wait:"Please wait…",
 exists:"There is already an account with this email. Sign in instead.",shortPass:"Use a password of at least 6 characters.",
 checkEmail:"Account created. Open the email we sent you to confirm it, then sign in.",notConfirmed:"Please confirm your email first, then sign in.",
 noConfig:"Accounts are not set up yet on this site (the Supabase keys are missing).",loginFail:"Sign-in didn't work. Check your internet and try again.",
 proto:"Prototype: please don't reuse a password you use anywhere else.",
 about:"Built for village Sunday school teachers in Pakistan who have no lesson books, no printer and often no internet.",
 err:{not_granted:"Claude wasn't allowed for this page, so new lessons are off. Ready-made lessons still work.",
  rate_limited:"Too many requests right now. Wait a minute and try again.",
  invalid_json:"The lesson came back incomplete. Press Make lesson to try again.",
  offline:"The internet dropped. Open a ready-made or saved lesson below.",
  other:"Something went wrong making the lesson. Try again in a moment."}},
ur:{app:"گاؤں کے سنڈے اسکول کا ساتھی",tag:"30 منٹ کا تیار سبق، کہانی سے جڑے کھیلوں کے ساتھ",
 online:"آن لائن · نئے سبق دستیاب",offline:"آف لائن · تیار اور محفوظ سبق",noai:"تیار اور محفوظ سبق",
 plan:"اس اتوار کا سبق تیار کریں",story:"بائبل کی کہانی",age:"عمر",time:"سبق کا وقت",min30:"30 منٹ",
 quick:"تیار سبق (فوراً کھلتے ہیں، بغیر انٹرنیٹ بھی)",or:"یا نیا سبق بنانے کے لیے کوئی بھی بائبل کہانی لکھیں",
 ph:"مثلاً روت اور نعومی، یوسف کا رنگ برنگا چوغہ، دس کوڑھی",make:"سبق بنائیں",stop:"روکیں",
 writing:"آپ کا سبق لکھا جا رہا ہے… عموماً ایک منٹ سے کم",words:"الفاظ اب تک",
 needNet:"آپ آف لائن ہیں۔ نئے سبق کے لیے انٹرنیٹ چاہیے۔ نیچے سے تیار یا محفوظ سبق کھولیں۔",
 needApp:"نئے سبق تب بنتے ہیں جب یہ صفحہ انٹرنیٹ کے ساتھ اپنے Claude لنک سے کھولا جائے۔ تیار اور محفوظ سبق یہاں بھی چلتے ہیں۔",
 ages:{"4-6":"عمر 4–6","7-9":"عمر 7–9","10-13":"عمر 10–13","mixed":"ملی جلی عمریں"},
 seg:{opening:"خوش آمدید",story:"کہانی سنائیں",questions:"بات چیت",game1:"کھیل 1",game2:"کھیل 2",activity:"سرگرمی",prayer:"اختتامی دعا"},
 verse:"یاد کرنے کی آیت",big:"مرکزی خیال",bring:"ساتھ لائیں:",tips:"کہانی کو اداکاری سے سنائیں",ageTip:"اس عمر کے بچوں کے لیے",
 link:"کہانی سے تعلق",mat:"سامان:",steps:"کیسے کھیلیں",
 copy:"سبق کاپی کریں",copied:"سبق کاپی ہو گیا",copyFail:"یہاں کاپی نہیں ہوا۔ متن کو خود منتخب کر کے کاپی کریں۔",
 regen:"نئے کھیل",regenning:"نئے کھیل ڈھونڈے جا رہے ہیں…",
 readyMade:"تیار سبق",mine:"میرے سبق",mineHint:"آپ کے محفوظ کیے ہوئے سبق آپ کے اکاؤنٹ میں رہتے ہیں، اس لیے جس فون یا کمپیوٹر پر بھی سائن اِن کریں وہاں کھل جاتے ہیں۔",
 mineEmpty:"ابھی کوئی محفوظ سبق نہیں۔ کوئی تیار سبق کھولیں اور 'میرے سبق میں محفوظ کریں' دبائیں۔",
 saveBtn:"میرے سبق میں محفوظ کریں",savedDone:"محفوظ ہے ✓",loading:"آپ کے سبق لوڈ ہو رہے ہیں…",
 saveFail:"آپ کے محفوظ سبق تک رسائی نہیں ہو سکی۔ انٹرنیٹ چیک کر کے دوبارہ کوشش کریں۔",
 del:"ہٹائیں",undo:"واپس",removed:"سبق ہٹا دیا گیا",
 offTitle:"اسے اپنے فون میں رکھیں",offText:"پورا ساتھی ایک فائل میں محفوظ کریں، تمام تیار اور آپ کے محفوظ سبق کے ساتھ۔ فون کے براؤزر میں کسی بھی وقت بغیر انٹرنیٹ کھولیں۔",
 dl:"آف لائن کے لیے ڈاؤن لوڈ کریں",dlDone:"محفوظ ہو گیا۔ فون کے Downloads سے فائل کھولیں۔",dlNo:"ڈاؤن لوڈ منسوخ ہو گیا۔",
 savedAs:"میرے سبق میں محفوظ ہو گیا",madeIn:"یہ سبق اردو میں ہے۔ انگریزی کے لیے زبان بدل کر دوبارہ بنائیں۔",
 readBible:"آیت بچوں کے ساتھ اپنی بائبل سے پڑھیں۔",
 signin:"سائن اِن کریں",signup:"اکاؤنٹ بنائیں",welcome:"خوش آمدید، استاد صاحب",user:"ای میل",pass:"پاس ورڈ",useDemo:"ڈیمو اکاؤنٹ استعمال کریں",
 demoInfo:"ڈیمو اکاؤنٹ",badLogin:"ای میل یا پاس ورڈ غلط ہے۔ ڈیمو اکاؤنٹ آزمائیں۔",signout:"سائن آؤٹ",
 toSignup:"نئے استاد ہیں؟ اکاؤنٹ بنائیں",toSignin:"پہلے سے اکاؤنٹ ہے؟ سائن اِن کریں",wait:"ذرا انتظار کریں…",
 exists:"اس ای میل سے اکاؤنٹ پہلے ہی موجود ہے۔ سائن اِن کریں۔",shortPass:"کم از کم 6 حروف کا پاس ورڈ رکھیں۔",
 checkEmail:"اکاؤنٹ بن گیا۔ ہماری بھیجی ہوئی ای میل کھول کر تصدیق کریں، پھر سائن اِن کریں۔",notConfirmed:"پہلے اپنی ای میل کی تصدیق کریں، پھر سائن اِن کریں۔",
 noConfig:"اس سائٹ پر ابھی اکاؤنٹ تیار نہیں ہیں (Supabase کی چابیاں موجود نہیں)۔",loginFail:"سائن اِن نہیں ہوا۔ انٹرنیٹ چیک کر کے دوبارہ کوشش کریں۔",
 proto:"پروٹوٹائپ: وہ پاس ورڈ استعمال نہ کریں جو آپ کہیں اور استعمال کرتے ہیں۔",
 about:"پاکستان کے دیہات میں سنڈے اسکول کے اساتذہ کے لیے، جن کے پاس نہ سبق کی کتابیں ہیں، نہ پرنٹر، اور اکثر انٹرنیٹ بھی نہیں۔",
 err:{not_granted:"اس صفحے کے لیے Claude کی اجازت نہیں دی گئی، اس لیے نئے سبق بند ہیں۔ تیار سبق چلتے رہیں گے۔",
  rate_limited:"ابھی بہت زیادہ درخواستیں ہیں۔ ایک منٹ رک کر دوبارہ کوشش کریں۔",
  invalid_json:"سبق ادھورا آیا۔ دوبارہ 'سبق بنائیں' دبائیں۔",
  offline:"انٹرنیٹ چلا گیا۔ نیچے سے تیار یا محفوظ سبق کھولیں۔",
  other:"سبق بنانے میں مسئلہ ہوا۔ تھوڑی دیر بعد دوبارہ کوشش کریں۔"}}
};

/* ---------- ready-made lessons (work offline) ---------- */
const LIB=[
{id:"noah",
en:{title:"Noah and the Big Boat",ref:"Genesis 6–9",verse:{ref:"Genesis 9:13",text:"I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth."},
 bigIdea:"God keeps his promises, and he keeps his people safe.",
 opening:"Greet each child by name. Ask: \"Have you ever been caught in heavy rain? Where did you run to be safe?\" Let two or three children answer.",
 story:"People had forgotten God and were doing wrong things, but Noah loved God and obeyed him. God told Noah to build a very big boat, an ark. Noah worked for many years while people laughed at him. God brought the animals two by two, and Noah's family went inside. Rain fell for forty days and nights and water covered everything, but everyone in the ark was safe. When the water went down, Noah thanked God, and God put a rainbow in the sky as a promise never to flood the whole earth again.",
 tips:["Make rain together: tap fingers, pat knees, stamp feet, then go quiet as the rain stops.","Some children hammer the ark while others pretend to laugh at Noah.","Finish by drawing a rainbow in the air with your arm."],
 questions:["Why did Noah keep building when people laughed at him?","How do you think Noah felt inside the ark during the storm?","What promise did God make with the rainbow?","What promise of God can you remember when you are scared?"],
 games:[{name:"Animals Two by Two",link:"Noah brought the animals into the ark in pairs.",steps:["Whisper an animal name to each child. Give every animal to two children.","On \"Go\", everyone makes their animal's sound and moves like it until they find their partner.","Pairs walk together into the \"ark\" (a rope circle or chalk outline). The last pair says the memory verse."],materials:"Rope or chalk"},
  {name:"Rain, Thunder, Rainbow",link:"The storm came, God kept Noah safe, and the rainbow showed his promise.",steps:["Teach the calls: \"Rain\" = pat knees, \"Thunder\" = stamp feet, \"Flood\" = run into the ark circle, \"Rainbow\" = freeze with arms in an arch.","Call them in any order, faster and faster.","Anyone who does the wrong action helps you call the next round."],materials:"Rope or chalk for the ark"}],
 activity:{name:"Leaf and Flower Rainbow",steps:["Children collect leaves, flowers or coloured cloth scraps close by (2 minutes).","Lay them on the ground in rainbow arches together.","Stand around the rainbow and say the verse together."],materials:"Leaves, flowers or cloth scraps"},
 prayer:"Thank you, God, that you always keep your promises. Help us trust you and obey you like Noah. Amen.",
 ageTips:{"4-6":"Keep the story to the animals, the rain and the rainbow. Use lots of animal sounds.","7-9":"Let them count the pairs during the game to stay busy.","10-13":"Talk about obeying God when friends laugh at you, as people laughed at Noah."}},
ur:{title:"نوح اور بڑی کشتی",ref:"پیدائش 6–9",verse:{ref:"پیدائش 9:13",text:"میں اپنی کمان کو بادل میں رکھتا ہوں، وہ میرے اور زمین کے درمیان عہد کا نشان ہوگی۔"},
 bigIdea:"خدا اپنے وعدے پورے کرتا ہے اور اپنے لوگوں کو محفوظ رکھتا ہے۔",
 opening:"ہر بچے کو اس کے نام سے خوش آمدید کہیں۔ پوچھیں: کیا آپ کبھی تیز بارش میں پھنسے ہیں؟ محفوظ رہنے کے لیے کہاں بھاگے؟ دو تین بچوں کو جواب دینے دیں۔",
 story:"لوگ خدا کو بھول گئے تھے اور برے کام کر رہے تھے، لیکن نوح خدا سے محبت کرتا تھا اور اس کا حکم مانتا تھا۔ خدا نے نوح سے ایک بہت بڑی کشتی بنانے کو کہا۔ لوگ ہنستے رہے مگر نوح کئی سال کام کرتا رہا۔ خدا جانوروں کو جوڑا جوڑا لایا اور نوح کا خاندان کشتی میں چلا گیا۔ چالیس دن اور چالیس رات بارش ہوئی اور پانی نے سب کچھ ڈھانپ لیا، لیکن کشتی میں سب محفوظ رہے۔ جب پانی اترا تو نوح نے خدا کا شکر کیا، اور خدا نے آسمان پر قوسِ قزح رکھی کہ وہ پھر کبھی ساری زمین کو پانی سے نہیں ڈبوئے گا۔",
 tips:["مل کر بارش بنائیں: چٹکیاں بجائیں، گھٹنوں پر ہاتھ ماریں، پاؤں زمین پر ماریں، پھر بارش رکنے پر خاموش ہو جائیں۔","کچھ بچے کشتی پر ہتھوڑا چلائیں اور کچھ نوح پر ہنسنے کی اداکاری کریں۔","آخر میں ہاتھ سے ہوا میں قوسِ قزح بنائیں۔"],
 questions:["لوگ ہنس رہے تھے، پھر بھی نوح کشتی کیوں بناتا رہا؟","طوفان کے وقت کشتی کے اندر نوح کو کیسا لگا ہوگا؟","قوسِ قزح کے ذریعے خدا نے کیا وعدہ کیا؟","جب آپ ڈرتے ہیں تو خدا کا کون سا وعدہ یاد رکھ سکتے ہیں؟"],
 games:[{name:"جوڑا جوڑا جانور",link:"نوح جانوروں کو جوڑا جوڑا کشتی میں لایا۔",steps:["ہر بچے کے کان میں ایک جانور کا نام کہیں۔ ہر جانور دو بچوں کو دیں۔","'شروع' کہنے پر سب اپنے جانور کی آواز نکالیں اور ویسے ہی چلیں جب تک اپنا ساتھی نہ ملے۔","جوڑے مل کر 'کشتی' (رسی کا دائرہ یا چاک کا نشان) میں جائیں۔ آخری جوڑا یاد کرنے کی آیت سنائے۔"],materials:"رسی یا چاک"},
  {name:"بارش، گرج، قوسِ قزح",link:"طوفان آیا، خدا نے نوح کو بچایا، اور قوسِ قزح اس کے وعدے کا نشان بنی۔",steps:["اشارے سکھائیں: 'بارش' = گھٹنوں پر ہاتھ، 'گرج' = پاؤں مارنا، 'سیلاب' = کشتی کے دائرے میں بھاگنا، 'قوسِ قزح' = بازوؤں سے محراب بنا کر رک جانا۔","کسی بھی ترتیب سے اور تیز تیز بولیں۔","جو غلط کرے وہ اگلی باری میں آپ کے ساتھ اشارے بولے۔"],materials:"کشتی کے لیے رسی یا چاک"}],
 activity:{name:"پتوں اور پھولوں کی قوسِ قزح",steps:["بچے قریب سے پتے، پھول یا رنگین کپڑے کے ٹکڑے لائیں (2 منٹ)۔","سب مل کر انہیں زمین پر قوسِ قزح کی شکل میں رکھیں۔","قوسِ قزح کے گرد کھڑے ہو کر مل کر آیت پڑھیں۔"],materials:"پتے، پھول یا کپڑے کے ٹکڑے"},
 prayer:"اے خدا، تیرا شکر ہو کہ تو ہمیشہ اپنے وعدے پورے کرتا ہے۔ ہماری مدد کر کہ ہم نوح کی طرح تجھ پر بھروسا کریں اور تیرا حکم مانیں۔ آمین۔",
 ageTips:{"4-6":"کہانی کو جانوروں، بارش اور قوسِ قزح تک رکھیں۔ جانوروں کی آوازیں زیادہ نکالیں۔","7-9":"کھیل میں جوڑوں کو گننے دیں تاکہ مصروف رہیں۔","10-13":"بات کریں کہ دوست مذاق اڑائیں تب بھی خدا کا حکم ماننا ہے، جیسے لوگوں نے نوح کا مذاق اڑایا۔"}}},

{id:"david",
en:{title:"David and Goliath",ref:"1 Samuel 17",verse:{ref:"Psalm 56:3",text:"When I am afraid, I will put my trust in you."},
 bigIdea:"With God on our side, even small people can be brave.",
 opening:"Ask everyone to stand as tall as they can, then crouch as small as they can. Ask: \"What makes you feel small or scared?\"",
 story:"The army of Israel was afraid. Every day a giant soldier called Goliath shouted at them, and nobody dared to fight him. David was a young shepherd boy who brought food to his brothers. He said, \"God saved me from the lion and the bear. He will save me from this giant too.\" King Saul gave David his armour, but it was too big, so David took only his sling and five smooth stones from the stream. Goliath laughed at him. David said, \"You come with a sword, but I come in the name of the Lord.\" With one stone God helped David win, and everyone saw that God is strong.",
 tips:["Have one tall child (or you standing on a bench) be Goliath. Let him shout, then everyone gasps.","Count the five stones out loud together.","When the stone hits, everyone falls silent, then cheers."],
 questions:["Why was everyone afraid of Goliath?","Where did David's courage come from?","Why didn't David wear the king's armour?","What is a \"giant\" problem you face? How can God help you?"],
 games:[{name:"Five Smooth Stones",link:"David picked five smooth stones from the stream.",steps:["Before class, chalk one word of the memory verse on each of five smooth stones and hide them.","Teams search. When all five are found, teams put the words in order.","The team that reads the verse correctly first leads everyone in saying it."],materials:"5 smooth stones, chalk"},
  {name:"Knock Down the Giant",link:"David faced Goliath trusting God, not his own strength.",steps:["Draw a big giant on a wall or the ground with chalk, or stack cups or tins as a \"giant\".","Children throw a soft ball of rolled cloth or paper from a line. (Never real stones.)","Each child who hits says one thing they are scared of, and everyone answers: \"God is bigger!\""],materials:"Chalk or tins/cups, a cloth or paper ball"}],
 activity:{name:"Trust Stones",steps:["Each child takes a small stone.","They chalk a mark or word for something that scares them.","They put their stone into a basket or circle labelled \"I trust God\" while saying the verse."],materials:"Small stones, chalk, a basket or cloth"},
 prayer:"Dear God, you are bigger than anything we fear. When we are afraid, help us trust you like David did. Amen.",
 ageTips:{"4-6":"Focus on David being small and God being strong. Keep Goliath funny, not frightening.","7-9":"Let them act the whole story in two groups, Israel's army and the Philistines.","10-13":"Ask about \"giants\" like exams, family trouble or being teased, and how trust in God looks in those."}},
ur:{title:"داؤد اور جالوت",ref:"1 سموئیل 17",verse:{ref:"زبور 56:3",text:"جس وقت مجھے ڈر لگے گا، میں تجھ پر توکل کروں گا۔"},
 bigIdea:"جب خدا ہمارے ساتھ ہو تو چھوٹے بھی بہادر بن سکتے ہیں۔",
 opening:"سب کو کہیں کہ جتنا ہو سکے لمبے ہو کر کھڑے ہوں، پھر جتنا ہو سکے چھوٹے ہو کر بیٹھ جائیں۔ پوچھیں: کون سی چیز آپ کو چھوٹا یا ڈرا ہوا محسوس کرواتی ہے؟",
 story:"اسرائیل کی فوج ڈری ہوئی تھی۔ ہر روز جالوت نام کا ایک دیو جیسا سپاہی ان پر چلّاتا، اور کوئی اس سے لڑنے کی ہمت نہ کرتا۔ داؤد ایک نوجوان چرواہا تھا جو اپنے بھائیوں کے لیے کھانا لایا تھا۔ اس نے کہا، 'خدا نے مجھے شیر اور ریچھ سے بچایا، وہ مجھے اس دیو سے بھی بچائے گا۔' بادشاہ ساؤل نے اسے اپنی زرہ دی مگر وہ بہت بڑی تھی، اس لیے داؤد نے صرف اپنی فلاخن اور ندی سے پانچ چکنے پتھر لیے۔ جالوت اس پر ہنسا۔ داؤد نے کہا، 'تو تلوار لے کر آتا ہے، مگر میں خداوند کے نام سے آتا ہوں۔' خدا کی مدد سے داؤد ایک ہی پتھر سے جیت گیا، اور سب نے دیکھا کہ خدا طاقتور ہے۔",
 tips:["ایک لمبا بچہ (یا آپ بینچ پر کھڑے ہو کر) جالوت بنے اور چلّائے، سب ڈرنے کی اداکاری کریں۔","پانچ پتھر مل کر اونچی آواز میں گنیں۔","پتھر لگتے ہی سب خاموش ہو جائیں، پھر خوشی سے نعرہ لگائیں۔"],
 questions:["سب جالوت سے کیوں ڈرتے تھے؟","داؤد کو ہمت کہاں سے ملی؟","داؤد نے بادشاہ کی زرہ کیوں نہیں پہنی؟","آپ کی زندگی میں کون سا 'دیو' جیسا مسئلہ ہے؟ خدا کیسے مدد کر سکتا ہے؟"],
 games:[{name:"پانچ چکنے پتھر",link:"داؤد نے ندی سے پانچ چکنے پتھر چنے۔",steps:["کلاس سے پہلے پانچ چکنے پتھروں پر چاک سے یاد کرنے کی آیت کا ایک ایک لفظ لکھ کر چھپا دیں۔","ٹیمیں ڈھونڈیں۔ پانچوں ملنے پر الفاظ کو ترتیب سے رکھیں۔","جو ٹیم پہلے درست آیت پڑھے، وہ سب سے آیت دہروائے۔"],materials:"5 چکنے پتھر، چاک"},
  {name:"دیو کو گراؤ",link:"داؤد نے اپنی طاقت پر نہیں بلکہ خدا پر بھروسا کر کے جالوت کا سامنا کیا۔",steps:["دیوار یا زمین پر چاک سے بڑا دیو بنائیں، یا ڈبے/کپ اوپر تلے رکھ کر 'دیو' بنائیں۔","بچے ایک لکیر سے کپڑے یا کاغذ کی نرم گیند پھینکیں۔ (اصلی پتھر کبھی نہیں۔)","جس کا نشانہ لگے وہ ایک ڈر بتائے، اور سب جواب دیں: 'خدا اس سے بڑا ہے!'"],materials:"چاک یا ڈبے/کپ، کپڑے یا کاغذ کی گیند"}],
 activity:{name:"بھروسے کے پتھر",steps:["ہر بچہ ایک چھوٹا پتھر لے۔","اس پر چاک سے اپنے کسی ڈر کا نشان بنائے یا لفظ لکھے۔","آیت پڑھتے ہوئے پتھر 'میں خدا پر بھروسا کرتا ہوں' والی ٹوکری یا دائرے میں رکھے۔"],materials:"چھوٹے پتھر، چاک، ٹوکری یا کپڑا"},
 prayer:"پیارے خدا، تو ہمارے ہر ڈر سے بڑا ہے۔ جب ہم ڈریں تو ہماری مدد کر کہ داؤد کی طرح تجھ پر بھروسا کریں۔ آمین۔",
 ageTips:{"4-6":"داؤد کے چھوٹے ہونے اور خدا کے طاقتور ہونے پر زور دیں۔ جالوت کو ڈراؤنا نہیں، مزاحیہ رکھیں۔","7-9":"دو گروپوں میں پوری کہانی کی اداکاری کروائیں: اسرائیل کی فوج اور فلستی۔","10-13":"امتحان، گھر کے مسائل یا مذاق اڑائے جانے جیسے 'دیوؤں' پر بات کریں اور پوچھیں کہ وہاں خدا پر بھروسا کرنے کا کیا مطلب ہے۔"}}},

{id:"jonah",
en:{title:"Jonah and the Big Fish",ref:"Jonah 1–3",verse:{ref:"Acts 5:29",text:"We must obey God rather than men."},
 bigIdea:"God wants us to obey him, and he gives second chances.",
 opening:"Play a quick round: say \"Stand up!\", \"Sit down!\", \"Touch your nose!\" Ask: \"Is it always easy to do what we are told?\"",
 story:"God told Jonah, \"Go to the big city of Nineveh and tell the people to stop doing wrong.\" Jonah did not want to go, so he ran away and got on a ship going the other way. God sent a great storm. The sailors were frightened, and Jonah said, \"It's my fault. Throw me into the sea.\" When they did, the sea became calm, and God sent a big fish to swallow Jonah. For three days and nights Jonah prayed inside the fish and said sorry. God made the fish spit Jonah onto dry land. This time Jonah obeyed and went to Nineveh. The people listened, said sorry to God, and God forgave them too.",
 tips:["Children rock side to side like a ship in the storm.","Open and close your arms like a big fish mouth when Jonah is swallowed.","Everyone whispers Jonah's prayer: \"Sorry, God. I will obey.\""],
 questions:["Why did Jonah run away from God?","Can anyone hide from God? Why not?","What did Jonah do inside the fish?","God gave Jonah a second chance. How can we give others a second chance?"],
 games:[{name:"God Says",link:"Jonah learned to listen to God's voice and obey.",steps:["Like \"Simon says\": do the action only when you hear \"God says…\" first.","If you just say \"Jump!\" without \"God says\", anyone who moves sits down for one turn.","Mix in story actions: \"God says row the boat\", \"God says swim\", \"Go to Tarshish!\""],materials:"None"},
  {name:"The Big Fish",link:"God sent a big fish to catch Jonah and bring him back.",steps:["Two children hold a cloth or rope up high to make the fish's mouth.","Everyone else walks under it in a line while you all sing or clap.","When you shout \"Gulp!\" the mouth drops. Whoever is caught says \"God gives second chances\" and becomes part of the fish."],materials:"A cloth or rope"}],
 activity:{name:"Second Chance Fish",steps:["Children draw a fish outline with chalk on the floor or on paper.","Inside, they draw or write one way they want to obey God this week.","Share with a partner."],materials:"Chalk or paper and pencil"},
 prayer:"Dear God, thank you for giving us second chances. Help us listen to you and obey you quickly. Amen.",
 ageTips:{"4-6":"Keep it simple: Jonah ran away, God brought him back, Jonah obeyed.","7-9":"Act out the storm with sound effects, and let a child be the captain.","10-13":"Talk about why Jonah didn't want Nineveh forgiven, and how God loves people we find hard to love."}},
ur:{title:"یوناہ اور بڑی مچھلی",ref:"یوناہ 1–3",verse:{ref:"اعمال 5:29",text:"ہمیں آدمیوں کے حکم کی نسبت خدا کا حکم ماننا زیادہ فرض ہے۔"},
 bigIdea:"خدا چاہتا ہے کہ ہم اس کا حکم مانیں، اور وہ دوسرا موقع دیتا ہے۔",
 opening:"جلدی سے ایک کھیل کھیلیں: 'کھڑے ہو جاؤ!'، 'بیٹھ جاؤ!'، 'ناک کو چھوؤ!' پوچھیں: کیا کہا ماننا ہمیشہ آسان ہوتا ہے؟",
 story:"خدا نے یوناہ سے کہا، 'بڑے شہر نینوہ جا اور لوگوں سے کہہ کہ برے کام چھوڑ دیں۔' یوناہ جانا نہیں چاہتا تھا، اس لیے وہ بھاگ گیا اور الٹی سمت جانے والے جہاز میں سوار ہو گیا۔ خدا نے بڑا طوفان بھیجا۔ ملاح ڈر گئے، اور یوناہ نے کہا، 'یہ میری غلطی ہے، مجھے سمندر میں پھینک دو۔' جب انہوں نے ایسا کیا تو سمندر تھم گیا، اور خدا نے ایک بڑی مچھلی بھیجی جس نے یوناہ کو نگل لیا۔ تین دن اور تین رات یوناہ نے مچھلی کے اندر دعا کی اور معافی مانگی۔ خدا کے حکم سے مچھلی نے یوناہ کو خشکی پر اگل دیا۔ اس بار یوناہ نے حکم مانا اور نینوہ گیا۔ لوگوں نے بات سنی، خدا سے معافی مانگی، اور خدا نے انہیں بھی معاف کر دیا۔",
 tips:["طوفان میں جہاز کی طرح بچے دائیں بائیں جھولیں۔","یوناہ کے نگلے جانے پر بازوؤں سے بڑی مچھلی کا منہ کھولیں اور بند کریں۔","سب آہستہ سے یوناہ کی دعا کہیں: 'معاف کر خدا، میں حکم مانوں گا۔'"],
 questions:["یوناہ خدا سے کیوں بھاگا؟","کیا کوئی خدا سے چھپ سکتا ہے؟ کیوں نہیں؟","مچھلی کے اندر یوناہ نے کیا کیا؟","خدا نے یوناہ کو دوسرا موقع دیا۔ ہم دوسروں کو دوسرا موقع کیسے دے سکتے ہیں؟"],
 games:[{name:"خدا کہتا ہے",link:"یوناہ نے خدا کی آواز سننا اور ماننا سیکھا۔",steps:["جب پہلے 'خدا کہتا ہے…' سنیں تب ہی کام کریں۔","اگر آپ صرف 'کودو!' کہیں اور کوئی ہلے تو وہ ایک باری کے لیے بیٹھ جائے۔","کہانی کے کام شامل کریں: 'خدا کہتا ہے کشتی چلاؤ'، 'خدا کہتا ہے تیرو'، 'ترسیس جاؤ!'"],materials:"کچھ نہیں"},
  {name:"بڑی مچھلی",link:"خدا نے یوناہ کو پکڑ کر واپس لانے کے لیے بڑی مچھلی بھیجی۔",steps:["دو بچے کپڑا یا رسی اونچی پکڑ کر مچھلی کا منہ بنائیں۔","باقی سب گاتے یا تالیاں بجاتے ہوئے قطار میں نیچے سے گزریں۔","جب آپ 'ہڑپ!' کہیں تو منہ نیچے آ جائے۔ جو پکڑا جائے وہ کہے 'خدا دوسرا موقع دیتا ہے' اور مچھلی کا حصہ بن جائے۔"],materials:"کپڑا یا رسی"}],
 activity:{name:"دوسرے موقع کی مچھلی",steps:["بچے زمین پر چاک سے یا کاغذ پر مچھلی بنائیں۔","اس کے اندر تصویر بنائیں یا لکھیں کہ وہ اس ہفتے خدا کا حکم کیسے مانیں گے۔","ساتھی کو بتائیں۔"],materials:"چاک یا کاغذ اور پنسل"},
 prayer:"پیارے خدا، ہمیں دوسرا موقع دینے کے لیے تیرا شکر۔ ہماری مدد کر کہ ہم تیری بات سنیں اور جلدی سے تیرا حکم مانیں۔ آمین۔",
 ageTips:{"4-6":"سادہ رکھیں: یوناہ بھاگا، خدا اسے واپس لایا، یوناہ نے حکم مانا۔","7-9":"آوازوں کے ساتھ طوفان کی اداکاری کریں، ایک بچہ جہاز کا کپتان بنے۔","10-13":"بات کریں کہ یوناہ کیوں نہیں چاہتا تھا کہ نینوہ معاف ہو، اور خدا ان سے بھی محبت کرتا ہے جن سے ہمیں محبت کرنا مشکل لگتا ہے۔"}}},

{id:"daniel",
en:{title:"Daniel and the Lions",ref:"Daniel 6",verse:{ref:"Daniel 6:22",text:"My God has sent his angel, and has shut the lions' mouths."},
 bigIdea:"Keep praying and trusting God, even when it is hard.",
 opening:"Ask: \"How many times a day do you talk to God?\" Then ask everyone to roar like a lion, and then go completely silent.",
 story:"Daniel loved God and prayed to him three times every day by his window. The king liked Daniel, but some jealous men wanted to get him into trouble. They tricked the king into making a law: anyone who prays to anyone except the king will be thrown to the lions. Daniel knew about the law, but he still went home, opened his window and prayed to God as he always did. The men caught him, and the sad king had to throw Daniel into the lions' den. All night the king could not sleep. In the morning he ran to the den and called out. Daniel answered, \"My God sent his angel and shut the lions' mouths!\" The king was so happy, and he told everyone to honour Daniel's God.",
 tips:["Everyone roars as lions, then you clap once and the lions' mouths \"shut\".","Kneel by a window or door and pray, just like Daniel.","Act out the king running to the den in the morning."],
 questions:["Why did Daniel keep praying even when it was against the law?","How do you think Daniel felt in the lions' den?","How did God protect Daniel?","When is it hard for you to pray or do what is right?"],
 games:[{name:"Sleeping Lions",link:"God shut the lions' mouths and they stayed still all night.",steps:["Everyone lies down as a sleeping lion, very still and quiet.","One or two children are \"angels\" walking around. They may make faces or funny noises but must not touch anyone.","Any lion who moves or laughs becomes an angel. The last still lion says the memory verse."],materials:"None"},
  {name:"Three Times a Day",link:"Daniel prayed three times a day by his window.",steps:["Mark a \"window\" spot with chalk or a cloth at one end.","Teams line up. Each child runs to the window, kneels, says one thing they thank God for, and runs back.","Each team goes round three times, like Daniel praying three times a day."],materials:"Chalk or a cloth"}],
 activity:{name:"Prayer Knots",steps:["Each child gets a piece of string or cloth strip.","They tie three knots: one for thanks, one for sorry, one for please.","Pray with the knots: hold each knot and say a short prayer."],materials:"String, thread or cloth strips"},
 prayer:"Dear God, thank you that you hear us every time we pray. Help us keep praying and trusting you like Daniel. Amen.",
 ageTips:{"4-6":"Make the lions friendly and sleepy. Focus on God taking care of Daniel.","7-9":"Let them take turns being the king and the jealous men.","10-13":"Talk about standing firm when others pressure you to stop following God."}},
ur:{title:"دانی ایل اور شیر",ref:"دانی ایل 6",verse:{ref:"دانی ایل 6:22",text:"میرے خدا نے اپنے فرشتہ کو بھیجا اور شیروں کے منہ بند کر دیئے۔"},
 bigIdea:"مشکل وقت میں بھی دعا کرتے رہیں اور خدا پر بھروسا رکھیں۔",
 opening:"پوچھیں: آپ دن میں کتنی بار خدا سے بات کرتے ہیں؟ پھر سب کو شیر کی طرح دہاڑنے کو کہیں، اور پھر بالکل خاموش ہو جائیں۔",
 story:"دانی ایل خدا سے محبت کرتا تھا اور ہر روز تین بار اپنی کھڑکی کے پاس دعا کرتا تھا۔ بادشاہ دانی ایل کو پسند کرتا تھا، مگر کچھ حسد کرنے والے لوگ اسے مصیبت میں ڈالنا چاہتے تھے۔ انہوں نے چالاکی سے بادشاہ سے ایک قانون بنوایا: جو بادشاہ کے سوا کسی سے دعا کرے گا اسے شیروں کے آگے ڈال دیا جائے گا۔ دانی ایل کو قانون کا پتا تھا، پھر بھی وہ گھر گیا، کھڑکی کھولی اور ہمیشہ کی طرح خدا سے دعا کی۔ لوگوں نے اسے پکڑ لیا اور بادشاہ کو دکھ کے ساتھ دانی ایل کو شیروں کی ماند میں ڈالنا پڑا۔ ساری رات بادشاہ سو نہ سکا۔ صبح وہ بھاگ کر ماند پر گیا اور آواز دی۔ دانی ایل نے جواب دیا، 'میرے خدا نے اپنا فرشتہ بھیجا اور شیروں کے منہ بند کر دیے!' بادشاہ بہت خوش ہوا اور سب کو حکم دیا کہ دانی ایل کے خدا کی عزت کریں۔",
 tips:["سب شیر بن کر دہاڑیں، پھر آپ ایک تالی بجائیں اور شیروں کے منہ 'بند' ہو جائیں۔","دانی ایل کی طرح کھڑکی یا دروازے کے پاس گھٹنے ٹیک کر دعا کریں۔","بادشاہ کی طرح صبح سویرے ماند کی طرف بھاگنے کی اداکاری کریں۔"],
 questions:["قانون کے خلاف ہونے کے باوجود دانی ایل دعا کیوں کرتا رہا؟","شیروں کی ماند میں دانی ایل کو کیسا لگا ہوگا؟","خدا نے دانی ایل کی حفاظت کیسے کی؟","آپ کے لیے کب دعا کرنا یا صحیح کام کرنا مشکل ہوتا ہے؟"],
 games:[{name:"سوتے شیر",link:"خدا نے شیروں کے منہ بند کیے اور وہ ساری رات خاموش رہے۔",steps:["سب سوتے ہوئے شیر بن کر بالکل خاموش لیٹ جائیں۔","ایک دو بچے 'فرشتے' بن کر گھومیں۔ وہ منہ بنا سکتے یا مزاحیہ آوازیں نکال سکتے ہیں مگر کسی کو چھو نہیں سکتے۔","جو شیر ہلے یا ہنسے وہ فرشتہ بن جائے۔ آخری خاموش شیر یاد کرنے کی آیت سنائے۔"],materials:"کچھ نہیں"},
  {name:"دن میں تین بار",link:"دانی ایل دن میں تین بار اپنی کھڑکی کے پاس دعا کرتا تھا۔",steps:["ایک طرف چاک یا کپڑے سے 'کھڑکی' کا نشان بنائیں۔","ٹیمیں قطار بنائیں۔ ہر بچہ کھڑکی تک بھاگے، گھٹنے ٹیکے، ایک شکرگزاری کی بات کہے اور واپس آئے۔","ہر ٹیم تین چکر لگائے، جیسے دانی ایل دن میں تین بار دعا کرتا تھا۔"],materials:"چاک یا کپڑا"}],
 activity:{name:"دعا کی گرہیں",steps:["ہر بچے کو دھاگا یا کپڑے کی پٹی دیں۔","تین گرہیں لگائیں: ایک شکر کی، ایک معافی کی، ایک درخواست کی۔","ہر گرہ پکڑ کر ایک چھوٹی دعا کریں۔"],materials:"دھاگا یا کپڑے کی پٹیاں"},
 prayer:"پیارے خدا، تیرا شکر ہو کہ جب بھی ہم دعا کرتے ہیں تو تُو ہماری سنتا ہے۔ ہماری مدد کر کہ ہم دانی ایل کی طرح دعا کرتے رہیں اور تجھ پر بھروسا رکھیں۔ آمین۔",
 ageTips:{"4-6":"شیروں کو دوستانہ اور اونگھتا ہوا دکھائیں۔ خدا کے دانی ایل کا خیال رکھنے پر زور دیں۔","7-9":"باری باری بادشاہ اور حسد کرنے والے لوگ بننے دیں۔","10-13":"بات کریں کہ جب دوسرے خدا کی پیروی چھوڑنے کا دباؤ ڈالیں تو مضبوط کیسے رہیں۔"}}},

{id:"samaritan",
en:{title:"The Good Samaritan",ref:"Luke 10:25–37",verse:{ref:"Luke 10:27",text:"Love your neighbour as yourself."},
 bigIdea:"Anyone who needs help is my neighbour.",
 opening:"Ask: \"Who is your neighbour?\" Let children answer, then say: \"Jesus told a story to answer that exact question.\"",
 story:"A man asked Jesus, \"Who is my neighbour?\" So Jesus told a story. A man was walking on a lonely road when robbers attacked him, took everything and left him hurt by the road. A priest came by, saw him, and walked past on the other side. Then a temple helper came, looked, and also walked past. Then a Samaritan came. Samaritans and Jews did not like each other, but this man stopped. He cleaned and bandaged the hurt man's wounds, put him on his donkey, took him to an inn and paid for him to be cared for. Jesus asked, \"Which one was a neighbour?\" The answer: the one who showed kindness. Jesus said, \"Go and do the same.\"",
 tips:["Choose children to be the hurt man, the priest, the helper and the Samaritan. Everyone else is the road.","The priest and helper walk past with noses in the air. Everyone says \"Hmm!\"","The Samaritan gently wraps a cloth around the hurt man's arm."],
 questions:["Why do you think the first two men walked past?","Why was it surprising that the Samaritan helped?","Who is someone in our village who needs help?","What is one kind thing you can do this week?"],
 games:[{name:"Guide the Traveller",link:"The Samaritan led the hurt man safely to the inn.",steps:["Lay a path with stones or sticks as \"rocks on the road\".","One child is blindfolded with a cloth (the hurt traveller). A partner guides them with words only: \"Step left, stop, big step.\"","Swap roles. Ask: how did it feel to need help? To give help?"],materials:"A cloth for a blindfold, stones or sticks"},
  {name:"Bandage Relay",link:"The Samaritan stopped and bandaged the man's wounds.",steps:["Make teams. Each team gets a strip of cloth.","One by one, each child runs to a teammate sitting at the end, wraps the cloth gently around their arm, unwraps it and runs back.","When the team finishes, everyone says together: \"Love your neighbour!\""],materials:"Cloth strips (old dupatta or rags)"}],
 activity:{name:"Helping Hands",steps:["Children trace their hand with chalk on the floor or with pencil on paper.","Inside each finger, they draw or write one person they can help.","Pick one to do this week."],materials:"Chalk or paper and pencil"},
 prayer:"Dear Jesus, help us see people who need help and be kind to them, even if they are different from us. Amen.",
 ageTips:{"4-6":"Focus on stopping to help. Practise kind words and gentle hands.","7-9":"Let them act the story twice: once with everyone walking past, once with everyone helping.","10-13":"Talk about who the \"Samaritans\" are in our community today, the people we find it hard to help."}},
ur:{title:"نیک سامری",ref:"لوقا 10:25–37",verse:{ref:"لوقا 10:27",text:"اپنے پڑوسی سے اپنے برابر محبت رکھ۔"},
 bigIdea:"جسے مدد کی ضرورت ہو، وہی میرا پڑوسی ہے۔",
 opening:"پوچھیں: آپ کا پڑوسی کون ہے؟ بچوں کو جواب دینے دیں، پھر کہیں: یسوع نے اسی سوال کا جواب دینے کے لیے ایک کہانی سنائی۔",
 story:"ایک آدمی نے یسوع سے پوچھا، 'میرا پڑوسی کون ہے؟' تو یسوع نے ایک کہانی سنائی۔ ایک آدمی سنسان راستے پر جا رہا تھا کہ ڈاکوؤں نے اس پر حملہ کیا، سب کچھ چھین لیا اور اسے زخمی حالت میں سڑک کنارے چھوڑ دیا۔ ایک کاہن آیا، اسے دیکھا اور دوسری طرف سے گزر گیا۔ پھر ایک لاوی (ہیکل کا خادم) آیا، دیکھا اور وہ بھی گزر گیا۔ پھر ایک سامری آیا۔ سامری اور یہودی ایک دوسرے کو پسند نہیں کرتے تھے، مگر یہ آدمی رک گیا۔ اس نے زخمی کے زخم صاف کر کے پٹی باندھی، اسے اپنے گدھے پر بٹھایا، سرائے لے گیا اور اس کی دیکھ بھال کے پیسے دیے۔ یسوع نے پوچھا، 'ان میں سے پڑوسی کون نکلا؟' جواب تھا: وہ جس نے رحم کیا۔ یسوع نے کہا، 'جا، تو بھی ایسا ہی کر۔'",
 tips:["بچوں کو زخمی آدمی، کاہن، خادم اور سامری بنائیں۔ باقی سب راستہ بنیں۔","کاہن اور خادم ناک اونچی کر کے گزریں۔ سب کہیں 'ہونہہ!'","سامری نرمی سے زخمی کے بازو پر کپڑا لپیٹے۔"],
 questions:["آپ کے خیال میں پہلے دو آدمی کیوں گزر گئے؟","سامری کا مدد کرنا حیرانی کی بات کیوں تھی؟","ہمارے گاؤں میں کس کو مدد کی ضرورت ہے؟","اس ہفتے آپ کون سا ایک مہربانی کا کام کر سکتے ہیں؟"],
 games:[{name:"مسافر کی رہنمائی",link:"سامری زخمی آدمی کو حفاظت سے سرائے تک لے گیا۔",steps:["پتھروں یا لکڑیوں سے راستے میں 'رکاوٹیں' بنائیں۔","ایک بچے کی آنکھوں پر کپڑا باندھیں (زخمی مسافر)۔ ساتھی صرف الفاظ سے رہنمائی کرے: 'بائیں طرف قدم، رکو، بڑا قدم۔'","کردار بدلیں۔ پوچھیں: مدد کی ضرورت ہونا کیسا لگا؟ مدد کرنا کیسا لگا؟"],materials:"آنکھوں کے لیے کپڑا، پتھر یا لکڑیاں"},
  {name:"پٹی دوڑ",link:"سامری نے رک کر آدمی کے زخموں پر پٹی باندھی۔",steps:["ٹیمیں بنائیں۔ ہر ٹیم کو کپڑے کی ایک پٹی دیں۔","باری باری ہر بچہ دوسری طرف بیٹھے ساتھی تک بھاگے، اس کے بازو پر نرمی سے کپڑا لپیٹے، کھولے اور واپس آئے۔","ٹیم ختم ہونے پر سب مل کر کہیں: 'اپنے پڑوسی سے محبت رکھو!'"],materials:"کپڑے کی پٹیاں (پرانا دوپٹا یا کپڑا)"}],
 activity:{name:"مدد کرنے والے ہاتھ",steps:["بچے زمین پر چاک سے یا کاغذ پر پنسل سے اپنا ہاتھ بنائیں۔","ہر انگلی میں ایک ایسا شخص بنائیں یا لکھیں جس کی وہ مدد کر سکتے ہیں۔","اس ہفتے کے لیے ایک چنیں۔"],materials:"چاک یا کاغذ اور پنسل"},
 prayer:"پیارے یسوع، ہماری مدد کر کہ ہم مدد کے محتاج لوگوں کو دیکھیں اور ان پر مہربانی کریں، چاہے وہ ہم سے مختلف ہوں۔ آمین۔",
 ageTips:{"4-6":"رک کر مدد کرنے پر زور دیں۔ مہربان الفاظ اور نرم ہاتھوں کی مشق کریں۔","7-9":"کہانی دو بار کروائیں: ایک بار سب گزر جائیں، ایک بار سب مدد کریں۔","10-13":"بات کریں کہ آج ہمارے معاشرے میں 'سامری' کون ہیں، یعنی وہ لوگ جن کی مدد کرنا ہمیں مشکل لگتا ہے۔"}}},

{id:"sheep",
en:{title:"The Lost Sheep",ref:"Luke 15:1–7",verse:{ref:"Luke 19:10",text:"The Son of Man came to seek and to save that which was lost."},
 bigIdea:"Jesus looks for every one of us, because each one matters to him.",
 opening:"Ask: \"Have you ever lost something special? How did you feel when you found it?\" If anyone in class keeps goats or sheep, let them tell how they find a lost one.",
 story:"Jesus told a story about a shepherd who had one hundred sheep. Every evening he counted them: one, two, three… ninety-eight, ninety-nine. One was missing! The shepherd didn't say, \"Never mind, I still have ninety-nine.\" He left the others safe and went out into the hills, looking behind rocks and in thorny bushes, calling the sheep's name. At last he found it, put it on his shoulders and carried it home. He was so happy that he called his friends to celebrate. Jesus said that heaven is just as happy when one person who was lost comes back to God.",
 tips:["Everyone counts together and stops at ninety-nine with a shocked face.","Call \"Where are you, little sheep?\" in a soft voice while looking around the room.","Carry a child's bag or a rolled cloth on your shoulders as the sheep."],
 questions:["Why did the shepherd go looking for just one sheep?","How do you think the lost sheep felt?","How does Jesus feel about you?","Who do you know who might feel left out? How can you help them feel found?"],
 games:[{name:"Find the Lost Sheep",link:"The shepherd searched everywhere until he found the one lost sheep.",steps:["While children close their eyes, hide one white stone (or a cotton ball or white cloth) among many dark stones or leaves.","Everyone searches. Whoever finds it shouts \"I found my sheep!\"","The finder hides it next time."],materials:"1 white stone or cloth, many ordinary stones or leaves"},
  {name:"Shepherd's Voice",link:"The shepherd called, and the sheep knew his voice.",steps:["One child is the shepherd with a cloth over their eyes.","The other children are sheep spread out. You point to one, who says \"Baa\" softly.","The shepherd walks to the sound and gently finds the sheep. Then they swap."],materials:"A cloth for a blindfold"}],
 activity:{name:"Name Sheep",steps:["Each child draws a sheep with chalk or on paper. Cotton or white cloth scraps can be the wool.","They write their own name on it (or you write it for little ones).","Say together: \"Jesus knows my name and looks for me.\""],materials:"Chalk or paper, cotton or cloth scraps if you have them"},
 prayer:"Thank you, Jesus, that I am never forgotten. You know my name and you look for me. Help me care for people who feel lost. Amen.",
 ageTips:{"4-6":"Count with fingers and toes. Focus on the happy ending.","7-9":"Ask them to count to 100 in tens to feel how many sheep there were.","10-13":"Talk about how it feels to be left out, and that Jesus goes looking for those people."}},
ur:{title:"کھوئی ہوئی بھیڑ",ref:"لوقا 15:1–7",verse:{ref:"لوقا 19:10",text:"ابنِ آدم کھوئے ہوؤں کو ڈھونڈنے اور نجات دینے آیا ہے۔"},
 bigIdea:"یسوع ہم میں سے ہر ایک کو ڈھونڈتا ہے، کیونکہ ہر ایک اس کے لیے اہم ہے۔",
 opening:"پوچھیں: کیا آپ کی کوئی خاص چیز کبھی کھوئی ہے؟ ملنے پر کیسا لگا؟ اگر کلاس میں کسی کے گھر بکریاں یا بھیڑیں ہیں تو اسے بتانے دیں کہ کھوئی ہوئی کو کیسے ڈھونڈتے ہیں۔",
 story:"یسوع نے ایک چرواہے کی کہانی سنائی جس کی سو بھیڑیں تھیں۔ ہر شام وہ گنتا تھا: ایک، دو، تین… اٹھانوے، ننانوے۔ ایک کم تھی! چرواہے نے یہ نہیں کہا، 'کوئی بات نہیں، ننانوے تو ہیں۔' اس نے باقیوں کو محفوظ چھوڑا اور پہاڑیوں میں نکل گیا، پتھروں کے پیچھے اور کانٹے دار جھاڑیوں میں دیکھتا اور بھیڑ کو پکارتا رہا۔ آخرکار وہ مل گئی، اس نے اسے کندھوں پر اٹھایا اور گھر لے آیا۔ وہ اتنا خوش تھا کہ اس نے دوستوں کو بلا کر خوشی منائی۔ یسوع نے کہا کہ جب ایک کھویا ہوا شخص خدا کے پاس لوٹتا ہے تو آسمان پر بھی ایسی ہی خوشی ہوتی ہے۔",
 tips:["سب مل کر گنیں اور ننانوے پر حیران چہرے کے ساتھ رک جائیں۔","کمرے میں دیکھتے ہوئے نرمی سے پکاریں: 'چھوٹی بھیڑ، تم کہاں ہو؟'","کسی بچے کا بستہ یا لپٹا ہوا کپڑا بھیڑ بنا کر کندھوں پر اٹھائیں۔"],
 questions:["چرواہا صرف ایک بھیڑ کے لیے کیوں گیا؟","کھوئی ہوئی بھیڑ کو کیسا لگا ہوگا؟","یسوع آپ کے بارے میں کیا محسوس کرتا ہے؟","آپ کس کو جانتے ہیں جو اکیلا محسوس کرتا ہو؟ آپ اس کی مدد کیسے کر سکتے ہیں؟"],
 games:[{name:"کھوئی ہوئی بھیڑ ڈھونڈو",link:"چرواہے نے ہر جگہ ڈھونڈا جب تک ایک کھوئی ہوئی بھیڑ نہ ملی۔",steps:["بچے آنکھیں بند کریں، آپ بہت سے عام پتھروں یا پتوں کے بیچ ایک سفید پتھر (یا روئی یا سفید کپڑا) چھپائیں۔","سب ڈھونڈیں۔ جسے ملے وہ پکارے: 'مجھے اپنی بھیڑ مل گئی!'","اگلی بار وہی چھپائے۔"],materials:"1 سفید پتھر یا کپڑا، بہت سے عام پتھر یا پتے"},
  {name:"چرواہے کی آواز",link:"چرواہا پکارتا تھا اور بھیڑیں اس کی آواز پہچانتی تھیں۔",steps:["ایک بچہ آنکھوں پر کپڑا باندھ کر چرواہا بنے۔","باقی بچے بھیڑیں بن کر پھیل جائیں۔ آپ ایک کی طرف اشارہ کریں، وہ آہستہ سے 'مَیں مَیں' کہے۔","چرواہا آواز کی طرف جا کر نرمی سے بھیڑ کو ڈھونڈے۔ پھر باری بدلیں۔"],materials:"آنکھوں کے لیے کپڑا"}],
 activity:{name:"نام والی بھیڑ",steps:["ہر بچہ چاک سے یا کاغذ پر بھیڑ بنائے۔ روئی یا سفید کپڑے کے ٹکڑے اون بن سکتے ہیں۔","اس پر اپنا نام لکھے (چھوٹے بچوں کے لیے آپ لکھ دیں)۔","مل کر کہیں: 'یسوع میرا نام جانتا ہے اور مجھے ڈھونڈتا ہے۔'"],materials:"چاک یا کاغذ، روئی یا کپڑے کے ٹکڑے اگر ہوں"},
 prayer:"پیارے یسوع، تیرا شکر کہ تو مجھے کبھی نہیں بھولتا۔ تو میرا نام جانتا ہے اور مجھے ڈھونڈتا ہے۔ میری مدد کر کہ میں ان کا خیال رکھوں جو کھوئے ہوئے محسوس کرتے ہیں۔ آمین۔",
 ageTips:{"4-6":"انگلیوں سے گنیں۔ خوشی والے انجام پر زور دیں۔","7-9":"دس دس کر کے سو تک گنوائیں تاکہ پتا چلے کتنی بھیڑیں تھیں۔","10-13":"اکیلا چھوڑ دیے جانے کے احساس پر بات کریں، اور یہ کہ یسوع ایسے لوگوں کو ڈھونڈنے جاتا ہے۔"}}},

{id:"feeding",
en:{title:"Jesus Feeds Five Thousand",ref:"John 6:1–14",verse:{ref:"John 6:35",text:"I am the bread of life."},
 bigIdea:"When we give Jesus the little we have, he can do great things with it.",
 opening:"Show a small piece of roti or bread. Ask: \"How many people could this feed?\" Laugh together at the answers, then say: \"Let's see what Jesus did with a small lunch.\"",
 story:"A huge crowd followed Jesus to a hillside. There were five thousand men, plus women and children! It got late and everyone was hungry. Jesus asked Philip, \"Where can we buy bread for all these people?\" Philip said, \"Even lots of money would not be enough!\" Then Andrew brought a boy who had five small barley loaves and two small fish. It seemed so little. But Jesus took the bread, thanked God, and his disciples began to share it out. Everyone ate as much as they wanted! Afterwards they collected the leftovers and filled twelve baskets. The boy gave what he had, and Jesus did a miracle with it.",
 tips:["Children sit on the floor as the big crowd. Rub tummies when they get hungry.","One child is the boy holding out five fingers and two fingers.","Pass a real roti around and break off tiny pieces so everyone gets some."],
 questions:["How do you think the boy felt giving away his lunch?","What did Jesus do before sharing the food?","Why does it matter that there were leftovers?","What small thing can you give to Jesus or share with others?"],
 games:[{name:"Pass the Lunch",link:"The boy's small lunch was shared with the whole crowd.",steps:["Children sit in a circle. Wrap a small bundle in cloth as the \"lunch\".","Pass it around while everyone claps. When you stop clapping, whoever holds it says one thing they can share (food, toys, time, a smile).","Keep going until many children have had a turn."],materials:"A cloth bundle"},
  {name:"Twelve Baskets",link:"After everyone ate, the leftovers filled twelve baskets.",steps:["Scatter lots of small paper scraps, leaves or bottle caps as \"bread crumbs\".","Teams gather as many as they can into their cup or basket in one minute.","Count together. Can the whole class reach twelve full cups?"],materials:"Paper scraps, leaves or bottle caps, cups or baskets"}],
 activity:{name:"What I Can Give",steps:["Each child draws five loaves and two fish with chalk or on paper.","Next to them, they draw something they have that they can give to Jesus (a song, helping hands, sharing food).","Share with the person next to them."],materials:"Chalk or paper and pencil"},
 prayer:"Dear Jesus, thank you for giving us food every day. We give you what we have, even if it is small. Use it to help others. Amen.",
 ageTips:{"4-6":"Count the loaves and fish on fingers together. Keep it about sharing.","7-9":"Do quick sums: if each of 5 loaves fed 1000 people, how many people ate?","10-13":"Talk about feeling we have too little to help, and how God uses small gifts."}},
ur:{title:"یسوع پانچ ہزار کو کھانا کھلاتا ہے",ref:"یوحنا 6:1–14",verse:{ref:"یوحنا 6:35",text:"زندگی کی روٹی میں ہوں۔"},
 bigIdea:"جب ہم اپنا تھوڑا سا یسوع کو دیتے ہیں تو وہ اس سے بڑے کام کر سکتا ہے۔",
 opening:"روٹی کا ایک چھوٹا ٹکڑا دکھائیں۔ پوچھیں: اس سے کتنے لوگ کھا سکتے ہیں؟ جوابوں پر مل کر ہنسیں، پھر کہیں: آئیں دیکھیں یسوع نے ایک چھوٹے سے کھانے سے کیا کیا۔",
 story:"لوگوں کی ایک بہت بڑی بھیڑ یسوع کے پیچھے پہاڑی پر گئی۔ پانچ ہزار مرد تھے، اور عورتیں اور بچے بھی! دیر ہو گئی اور سب بھوکے تھے۔ یسوع نے فلپس سے پوچھا، 'ان سب کے لیے روٹی کہاں سے خریدیں؟' فلپس نے کہا، 'بہت سے پیسے بھی کافی نہیں ہوں گے!' پھر اندریاس ایک لڑکے کو لایا جس کے پاس جو کی پانچ چھوٹی روٹیاں اور دو چھوٹی مچھلیاں تھیں۔ یہ بہت تھوڑا لگتا تھا۔ لیکن یسوع نے روٹیاں لیں، خدا کا شکر کیا، اور شاگرد بانٹنے لگے۔ سب نے جی بھر کر کھایا! بعد میں بچا ہوا جمع کیا تو بارہ ٹوکریاں بھر گئیں۔ لڑکے نے جو کچھ اس کے پاس تھا دے دیا، اور یسوع نے اس سے معجزہ کیا۔",
 tips:["بچے بڑی بھیڑ بن کر زمین پر بیٹھیں۔ بھوک لگنے پر پیٹ پر ہاتھ پھیریں۔","ایک بچہ لڑکا بنے اور پانچ انگلیاں اور دو انگلیاں آگے کرے۔","اصلی روٹی گھمائیں اور چھوٹے ٹکڑے توڑیں تاکہ سب کو ملے۔"],
 questions:["اپنا کھانا دیتے ہوئے لڑکے کو کیسا لگا ہوگا؟","کھانا بانٹنے سے پہلے یسوع نے کیا کیا؟","بچا ہوا کھانا ہونا کیوں اہم ہے؟","آپ کون سی چھوٹی چیز یسوع کو دے سکتے ہیں یا دوسروں سے بانٹ سکتے ہیں؟"],
 games:[{name:"کھانا آگے بڑھاؤ",link:"لڑکے کا چھوٹا سا کھانا ساری بھیڑ میں بانٹا گیا۔",steps:["بچے دائرے میں بیٹھیں۔ کپڑے میں ایک چھوٹی پوٹلی باندھ کر 'کھانا' بنائیں۔","سب تالیاں بجائیں اور پوٹلی آگے بڑھاتے جائیں۔ جب آپ تالی روکیں تو جس کے پاس پوٹلی ہو وہ بتائے کہ وہ کیا بانٹ سکتا ہے (کھانا، کھلونے، وقت، مسکراہٹ)۔","کئی بچوں کی باری آنے تک جاری رکھیں۔"],materials:"کپڑے کی پوٹلی"},
  {name:"بارہ ٹوکریاں",link:"سب کے کھانے کے بعد بچا ہوا بارہ ٹوکریوں میں بھر گیا۔",steps:["کاغذ کے ٹکڑے، پتے یا بوتل کے ڈھکن 'روٹی کے ٹکڑے' بنا کر بکھیر دیں۔","ٹیمیں ایک منٹ میں جتنے ہو سکیں اپنے کپ یا ٹوکری میں جمع کریں۔","مل کر گنیں۔ کیا ساری کلاس بارہ کپ بھر سکتی ہے؟"],materials:"کاغذ کے ٹکڑے، پتے یا ڈھکن، کپ یا ٹوکریاں"}],
 activity:{name:"میں کیا دے سکتا ہوں",steps:["ہر بچہ چاک سے یا کاغذ پر پانچ روٹیاں اور دو مچھلیاں بنائے۔","ساتھ میں وہ چیز بنائے جو وہ یسوع کو دے سکتا ہے (گیت، مدد کرنے والے ہاتھ، کھانا بانٹنا)۔","ساتھ بیٹھے بچے کو بتائے۔"],materials:"چاک یا کاغذ اور پنسل"},
 prayer:"پیارے یسوع، ہر روز کھانا دینے کے لیے تیرا شکر۔ ہمارے پاس جو کچھ ہے ہم تجھے دیتے ہیں، چاہے تھوڑا ہو۔ اسے دوسروں کی مدد کے لیے استعمال کر۔ آمین۔",
 ageTips:{"4-6":"روٹیاں اور مچھلیاں انگلیوں پر مل کر گنیں۔ بات کو بانٹنے تک رکھیں۔","7-9":"آسان حساب: اگر ہر روٹی سے ہزار لوگوں نے کھایا تو کل کتنے لوگوں نے کھایا؟","10-13":"اس احساس پر بات کریں کہ ہمارے پاس مدد کے لیے بہت کم ہے، اور خدا چھوٹے تحفوں کو کیسے استعمال کرتا ہے۔"}}},

{id:"zacchaeus",
en:{title:"Zacchaeus Meets Jesus",ref:"Luke 19:1–10",verse:{ref:"2 Corinthians 5:17",text:"If anyone is in Christ, he is a new creation."},
 bigIdea:"Meeting Jesus changes our hearts and how we treat others.",
 opening:"Ask: \"Have you ever been at the back of a crowd and couldn't see? What did you do?\" Let children show how they would try to see.",
 story:"Zacchaeus was a tax collector in the town of Jericho. He was rich because he cheated people and took more money than he should. Nobody liked him. One day Jesus came to town and a big crowd gathered. Zacchaeus wanted to see Jesus, but he was too short! So he ran ahead and climbed a sycamore tree. When Jesus came by, he stopped, looked up and said, \"Zacchaeus, come down quickly! I'm coming to your house today.\" The crowd grumbled, but Zacchaeus was full of joy. He said, \"I will give half of what I have to the poor, and if I cheated anyone, I'll pay back four times as much!\" Jesus said, \"Today salvation has come to this house.\"",
 tips:["Everyone stands on tiptoe, then crouches, trying to see over the crowd.","One child stands on a bench or step as Zacchaeus up the tree.","Everyone grumbles \"Hmph!\" when Jesus goes to Zacchaeus's house."],
 questions:["Why didn't people like Zacchaeus?","How do you think he felt when Jesus called his name?","What did Zacchaeus do to show his heart had changed?","Is there something you need to make right with someone?"],
 games:[{name:"Short, Tall, Zacchaeus!",link:"Zacchaeus was short and climbed up high to see Jesus.",steps:["Teach the calls: \"Short\" = crouch, \"Tall\" = stand on tiptoe, \"Zacchaeus\" = pretend to climb a tree, \"Come down!\" = sit down fast.","Call them in any order, faster and faster.","Whoever is last to \"come down\" says the memory verse."],materials:"None"},
  {name:"Pay It Back Four Times",link:"Zacchaeus promised to pay back four times what he had taken.",steps:["Each child gets 1 small stone or bottle cap. A \"tax collector\" child goes around taking them.","When you call \"Jesus is here!\", the tax collector must give back 4 stones to each person from a pile.","Talk about how Zacchaeus made things right, then choose a new tax collector."],materials:"Lots of small stones or bottle caps"}],
 activity:{name:"Changed-Heart Tree",steps:["Draw a big tree with chalk on the ground or wall.","Each child adds a leaf with something kind they will do to make things right or help someone.","Read the leaves together."],materials:"Chalk, or paper leaves"},
 prayer:"Dear Jesus, thank you that you know our names and want to be our friend. Change our hearts so we are fair and kind to everyone. Amen.",
 ageTips:{"4-6":"Focus on Jesus calling Zacchaeus by name and being his friend.","7-9":"Practise the four-times sums: 2 coins back becomes 8.","10-13":"Talk about cheating, saying sorry and making things right, not just feeling sorry."}},
ur:{title:"زکائی کی یسوع سے ملاقات",ref:"لوقا 19:1–10",verse:{ref:"2 کرنتھیوں 5:17",text:"اگر کوئی مسیح میں ہے تو وہ نیا مخلوق ہے۔"},
 bigIdea:"یسوع سے ملنا ہمارا دل اور دوسروں سے ہمارا برتاؤ بدل دیتا ہے۔",
 opening:"پوچھیں: کیا آپ کبھی بھیڑ میں پیچھے کھڑے تھے اور کچھ دکھائی نہیں دیا؟ آپ نے کیا کیا؟ بچوں کو دکھانے دیں کہ وہ دیکھنے کی کوشش کیسے کریں گے۔",
 story:"زکائی یریحو شہر میں محصول لینے والا تھا۔ وہ امیر تھا کیونکہ لوگوں کو دھوکا دیتا اور زیادہ پیسے لیتا تھا۔ کوئی اسے پسند نہیں کرتا تھا۔ ایک دن یسوع شہر آیا اور بڑی بھیڑ جمع ہو گئی۔ زکائی یسوع کو دیکھنا چاہتا تھا مگر وہ قد کا چھوٹا تھا! اس لیے وہ آگے بھاگا اور گولر کے درخت پر چڑھ گیا۔ جب یسوع وہاں پہنچا تو رکا، اوپر دیکھا اور کہا، 'زکائی، جلدی نیچے آ! آج مجھے تیرے گھر رہنا ہے۔' بھیڑ بڑبڑانے لگی، مگر زکائی خوشی سے بھر گیا۔ اس نے کہا، 'میں اپنا آدھا مال غریبوں کو دوں گا، اور اگر کسی سے دھوکے سے کچھ لیا ہے تو چار گنا لوٹا دوں گا!' یسوع نے کہا، 'آج اس گھر میں نجات آئی ہے۔'",
 tips:["سب پنجوں کے بل کھڑے ہوں، پھر جھکیں، جیسے بھیڑ کے اوپر سے دیکھنے کی کوشش کر رہے ہوں۔","ایک بچہ بینچ یا سیڑھی پر کھڑا ہو کر درخت پر زکائی بنے۔","جب یسوع زکائی کے گھر جائے تو سب بڑبڑائیں 'ہونہہ!'"],
 questions:["لوگ زکائی کو کیوں پسند نہیں کرتے تھے؟","جب یسوع نے اس کا نام لیا تو اسے کیسا لگا ہوگا؟","زکائی نے کیا کیا جس سے پتا چلا کہ اس کا دل بدل گیا؟","کیا کوئی ایسی بات ہے جو آپ کو کسی کے ساتھ ٹھیک کرنی ہے؟"],
 games:[{name:"چھوٹا، لمبا، زکائی!",link:"زکائی چھوٹے قد کا تھا اور یسوع کو دیکھنے کے لیے اونچا چڑھا۔",steps:["اشارے سکھائیں: 'چھوٹا' = جھک جاؤ، 'لمبا' = پنجوں کے بل کھڑے ہو جاؤ، 'زکائی' = درخت پر چڑھنے کی نقل، 'نیچے آؤ!' = جلدی بیٹھ جاؤ۔","کسی بھی ترتیب سے اور تیز تیز بولیں۔","جو سب سے آخر میں 'نیچے آئے' وہ یاد کرنے کی آیت سنائے۔"],materials:"کچھ نہیں"},
  {name:"چار گنا لوٹاؤ",link:"زکائی نے وعدہ کیا کہ جو لیا ہے اس کا چار گنا لوٹائے گا۔",steps:["ہر بچے کو 1 چھوٹا پتھر یا ڈھکن دیں۔ ایک بچہ 'محصول لینے والا' بن کر سب سے لے لے۔","جب آپ پکاریں 'یسوع آ گیا!' تو وہ ڈھیر میں سے ہر ایک کو 4 پتھر واپس دے۔","بات کریں کہ زکائی نے کیسے چیزیں ٹھیک کیں، پھر نیا محصول لینے والا چنیں۔"],materials:"بہت سے چھوٹے پتھر یا ڈھکن"}],
 activity:{name:"بدلے ہوئے دل کا درخت",steps:["زمین یا دیوار پر چاک سے بڑا درخت بنائیں۔","ہر بچہ ایک پتا بنائے جس میں ایک مہربانی کا کام ہو جس سے وہ کچھ ٹھیک کرے گا یا کسی کی مدد کرے گا۔","مل کر پتے پڑھیں۔"],materials:"چاک، یا کاغذ کے پتے"},
 prayer:"پیارے یسوع، تیرا شکر کہ تو ہمارے نام جانتا ہے اور ہمارا دوست بننا چاہتا ہے۔ ہمارے دل بدل دے تاکہ ہم سب کے ساتھ انصاف اور مہربانی کریں۔ آمین۔",
 ageTips:{"4-6":"یسوع کے زکائی کو نام سے بلانے اور اس کا دوست بننے پر زور دیں۔","7-9":"چار گنا کا حساب کروائیں: 2 سکے واپس تو 8 بنتے ہیں۔","10-13":"دھوکے، معافی مانگنے اور صرف افسوس کرنے کی بجائے چیزیں ٹھیک کرنے پر بات کریں۔"}}}
];

/* ---------- demo account (a real Supabase user, created once in the Supabase dashboard) ---------- */
const DEMO={email:"demo@village-sunday-school.vercel.app",pass:"sunday123"};

/* ---------- keep number ranges in order inside Urdu text ---------- */
const ltrNums=(v)=>v.replace(/d+(?:[:–-]d+)+/g,m=>"⁦"+m+"⁩");
for(const k in T.ur.ages)T.ur.ages[k]=ltrNums(T.ur.ages[k]);
for(const e of LIB.map(x=>x.ur)){e.ref=ltrNums(e.ref);e.verse.ref=ltrNums(e.verse.ref)}

/* ---------- state ---------- */
const LS={lang:"vssc.lang",age:"vssc.age"};
function lsGet(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}

let saved=[];

const S={user:null,authReady:false,authMode:"signin",authMsg:"",authBusy:false,lang:lsGet(LS.lang,"en")==="ur"?"ur":"en",age:lsGet(LS.age,"7-9"),view:{src:"lib",id:"david"},
 busy:null,error:"",loadingSaved:false,savingLib:false,sample:null,downloads:null,claudeChecked:false,net:navigator.onLine!==false,toast:"",lastRemoved:null};
if(!["4-6","7-9","10-13","mixed"].includes(S.age))S.age="7-9";


/* ---------- helpers ---------- */
function h(tag,attrs,...kids){const el=document.createElement(tag);
 if(attrs)for(const k in attrs){const v=attrs[k];if(v==null||v===false)continue;
  if(k==="class")el.className=v;else if(k.startsWith("on"))el.addEventListener(k.slice(2),v);
  else if(k==="text")el.textContent=v;else el.setAttribute(k,v===true?"":v)}
 for(const c of kids.flat()){if(c==null||c===false)continue;el.append(c instanceof Node?c:document.createTextNode(String(c)))}
 return el}
const t=()=>T[S.lang];
const canMake=()=>!!S.sample&&S.net;
const str=(v)=>typeof v==="string"?v.trim():"";
const arr=(v)=>Array.isArray(v)?v.map(str).filter(Boolean):[];
function cleanGame(g){g=g||{};return{name:str(g.name),link:str(g.link),steps:arr(g.steps),materials:str(g.materials)}}
function cleanLesson(L){L=L||{};const v=L.verse||{};const a=L.activity||{};
 return{title:str(L.title),ref:str(L.ref),verse:{ref:str(v.ref),text:str(v.text)},bigIdea:str(L.bigIdea),opening:str(L.opening),
  story:str(L.story),tips:arr(L.tips),questions:arr(L.questions),games:(Array.isArray(L.games)?L.games:[]).slice(0,2).map(cleanGame),
  activity:{name:str(a.name),steps:arr(a.steps),materials:str(a.materials)},prayer:str(L.prayer),ageTip:str(L.ageTip),ageTips:L.ageTips||null}}

function current(){
 if(S.view.src==="lib"){const e=LIB.find(x=>x.id===S.view.id)||LIB[1];return{lesson:e[S.lang],lang:S.lang,age:S.age,lib:true,id:e.id}}
 const s=saved.find(x=>x.id===S.view.id);if(!s){S.view={src:"lib",id:"david"};return current()}
 return{lesson:s.lesson,lang:s.lang,age:s.age,lib:false,id:s.id}}

function toast(msg,action){S.toast={msg,action};render();clearTimeout(toast._t);toast._t=setTimeout(()=>{S.toast="";render()},action?6000:2600)}

/* ---------- Claude ---------- */
const SHAPE=`{"title":"...","ref":"book chapter:verses","verse":{"ref":"...","text":"one short memory verse"},"bigIdea":"one sentence",
"opening":"2-minute welcome idea","story":"the story told simply in 6-9 sentences for the teacher to tell","tips":["3 ways to act it out with the children"],
"questions":["4 discussion questions, last one applies to the child's life"],
"games":[{"name":"...","link":"one sentence: how this game connects to the story","steps":["3 short steps"],"materials":"..."},{...second game...}],
"activity":{"name":"...","steps":["3 short steps"],"materials":"..."},"prayer":"short closing prayer","ageTip":"one tip for this age group"}`;
function rules(lang,age){
 const ages={"4-6":"ages 4 to 6","7-9":"ages 7 to 9","10-13":"ages 10 to 13","mixed":"a mixed group aged 4 to 13"}[age];
 return `You are helping a Sunday School teacher in a village with very few resources: no electricity, no printer, no screens, sometimes no chairs. Classes can be 10 to 40 children, in a small room or outdoors.
The lesson is for ${ages} and lasts exactly 30 minutes with this fixed timing: welcome 2 min, story 7 min, discussion 5 min, game 1 5 min, game 2 5 min, activity 4 min, prayer 2 min.
Rules:
- Both games must clearly connect to the Bible story, not be generic games.
- Materials must be things any village has: stones, sticks, leaves, chalk, rope, cloth or dupatta, a ball or rolled cloth ball, cups, bottle caps, paper and pencil. Never real stones thrown at people.
- Steps must be short enough to read aloud while teaching.
- Stay faithful to the Bible text. Use simple words.
- ${lang==="ur"?"Write every text value in simple everyday Urdu, in Urdu script. Use the usual Urdu Bible names (for example یسوع، داؤد، موسیٰ). Keep the JSON keys in English.":"Write in simple English."}
Reply with only JSON in exactly this shape:
${SHAPE}`}

let ctl=null;
async function makeLesson(story){
 story=story.trim();if(!story||!canMake())return;
 ctl=new AbortController();S.busy={kind:"lesson",words:0};S.error="";render();
 const lang=S.lang,age=S.age;
 try{
  const raw=await S.sample.json(`${rules(lang,age)}\n\nBible story: ${story}`,{signal:ctl.signal,onText:({text})=>{S.busy.words=(text.match(/\S+/g)||[]).length;updateProgress()}});
  const lesson=cleanLesson(raw);
  if(!lesson.title||!lesson.story||lesson.games.length<1)throw{code:"invalid_json"};
  const item={id:"m"+Date.now().toString(36),lang,age,story,createdAt:Date.now(),lesson};
  const s=await addSaved(item);S.busy=null;if(s){S.view={src:"saved",id:s.id};render();toast(t().savedAs)}else render();
  document.getElementById("lesson")?.scrollIntoView({behavior:"smooth",block:"start"});
 }catch(e){S.busy=null;handleErr(e)}}

async function newGames(){
 const c=current();if(!canMake())return;
 ctl=new AbortController();S.busy={kind:"games",words:0};S.error="";render();
 const L=c.lesson;
 const prompt=`${rules(c.lang,c.age)}

Only write TWO NEW games for this lesson, different from these existing ones: ${L.games.map(g=>g.name).join(", ")}.
Lesson: ${L.title} (${L.ref}). Big idea: ${L.bigIdea}
Story: ${L.story}
Reply with only JSON: {"games":[{"name":"...","link":"...","steps":["..."],"materials":"..."},{...}]}`;
 try{
  const raw=await S.sample.json(prompt,{signal:ctl.signal,onText:({text})=>{S.busy.words=(text.match(/\S+/g)||[]).length;updateProgress()}});
  const games=(raw&&Array.isArray(raw.games)?raw.games:[]).slice(0,2).map(cleanGame).filter(g=>g.name&&g.steps.length);
  if(games.length<2)throw{code:"invalid_json"};
  const lesson=Object.assign({},JSON.parse(JSON.stringify(L)),{games});
  let ok;
  if(c.lib){const s=await addSaved({lang:c.lang,age:c.age,story:L.title,lesson});ok=!!s;if(s)S.view={src:"saved",id:s.id}}
  else{const s=saved.find(x=>x.id===c.id);s.lesson=lesson;ok=await updateSaved(s)}
  S.busy=null;render();toast(ok?t().savedAs:t().saveFail);
 }catch(e){S.busy=null;handleErr(e)}}

function handleErr(e){
 const code=e&&e.code;
 if(code==="cancelled"){render();return}
 if(code==="not_granted"||code==="capability_disabled"||code==="capability_removed"||code==="unavailable"){S.sample=null;S.error=t().err.not_granted}
 else if(code==="rate_limited"||code==="queue_overflow")S.error=t().err.rate_limited;
 else if(code==="invalid_json")S.error=t().err.invalid_json;
 else if(!navigator.onLine){S.net=false;S.error=t().err.offline}
 else S.error=t().err.other;
 render()}

function updateProgress(){const el=document.getElementById("words");if(el&&S.busy)el.textContent=S.busy.words?`${S.busy.words} ${t().words}`:""}

/* ---------- copy & download ---------- */
function lessonText(c){const L=c.lesson,W=T[c.lang],seg=Object.fromEntries(SEGS.map(s=>[s[0],s[1]]));const out=[];
 out.push(L.title+(L.ref?` (${L.ref})`:""),`${W.ages[c.age]} · ${W.min30}`,"");
 if(L.verse.text)out.push(`${W.verse}: "${L.verse.text}" ${L.verse.ref}`);
 if(L.bigIdea)out.push(`${W.big}: ${L.bigIdea}`);
 out.push(`${W.bring} ${materialsOf(L)}`,"");
 out.push(`${W.seg.opening} (${seg.opening} min)`,L.opening,"");
 out.push(`${W.seg.story} (${seg.story} min)`,L.story,...L.tips.map(x=>"- "+x),"");
 out.push(`${W.seg.questions} (${seg.questions} min)`,...L.questions.map((q,i)=>`${i+1}. ${q}`),"");
 L.games.forEach((g,i)=>{out.push(`${W.seg["game"+(i+1)]} (5 min): ${g.name}`,g.link,...g.steps.map((s,j)=>`${j+1}. ${s}`),`${W.mat} ${g.materials}`,"")});
 out.push(`${W.seg.activity} (${seg.activity} min): ${L.activity.name}`,...L.activity.steps.map((s,j)=>`${j+1}. ${s}`),`${W.mat} ${L.activity.materials}`,"");
 out.push(`${W.seg.prayer} (${seg.prayer} min)`,L.prayer);
 return out.join("\n")}

async function copyLesson(){const txt=lessonText(current());
 try{await navigator.clipboard.writeText(txt);toast(t().copied)}catch(e){toast(t().copyFail)}}

/* ---------- render ---------- */
function materialsOf(L){const parts=[...L.games.map(g=>g.materials),L.activity.materials].join(", ").split(/[,،]| or | and | یا | اور /i)
 .map(s=>s.trim().replace(/[.۔]$/,"")).filter(s=>s&&!/^(none|کچھ نہیں)$/i.test(s));
 const seen=new Set();return parts.filter(p=>{const k=p.toLowerCase();if(seen.has(k))return false;seen.add(k);return true}).join(" · ")||"—"}

function render(){
 const W=t(),app=document.getElementById("app");
 app.dir=S.lang==="ur"?"rtl":"ltr";app.lang=S.lang;document.documentElement.lang=S.lang;
 const keepFocus=document.activeElement&&document.activeElement.id;
 if(!S.user){
  const u=document.getElementById("login-user")?.value??"",p=document.getElementById("login-pass")?.value??"";
  app.replaceChildren(header(W),loginView(W,u,p));
  if(keepFocus){const el=document.getElementById(keepFocus);if(el)el.focus({preventScroll:true})}
  return}
 const storyVal=document.getElementById("story-in")?.value??"";
 app.replaceChildren(header(W),h("p",{class:"about",text:W.about}),planner(W,storyVal),lessonView(W),shelves(W),S.toast?toastEl():null);
 if(keepFocus){const el=document.getElementById(keepFocus);if(el)el.focus({preventScroll:true})}}

function header(W){
 const statusTxt=canMake()?W.online:(!S.net?W.offline:W.noai);
 return h("header",{class:"top"},
  h("div",{class:"brand"},
   h("div",{class:"mark","aria-hidden":"true"},bookSvg()),
   h("div",{style:"min-width:0"},h("h1",{text:W.app}),h("p",{text:W.tag}))),
  S.user?h("span",{class:"status "+(canMake()?"on":"off"),role:"status",text:statusTxt}):null,
  h("div",{class:"lang",role:"group","aria-label":"Language"},
   h("button",{id:"lang-en","data-l":"en","aria-pressed":String(S.lang==="en"),onclick:()=>setLang("en"),text:"English"}),
   h("button",{id:"lang-ur","data-l":"ur","aria-pressed":String(S.lang==="ur"),onclick:()=>setLang("ur"),lang:"ur",text:"اردو"})),
  S.user?h("span",{class:"user"},h("span",{dir:"ltr",text:S.user&&S.user.email}),h("button",{id:"signout",class:"linkbtn",onclick:signOut,text:W.signout})):null)}

function loginView(W,u,p){
 if(!S.authReady)return h("div",{class:"login"},h("p",{class:"hint",text:W.wait}));
 const up=S.authMode==="signup";
 const user=h("input",{id:"login-user",type:"email",dir:"ltr",autocomplete:"email",autocapitalize:"none",required:true});user.value=u;
 const pass=h("input",{id:"login-pass",type:"password",dir:"ltr",autocomplete:up?"new-password":"current-password",required:true,minlength:"6"});pass.value=p;
 return h("form",{class:"login",onsubmit:(e)=>{e.preventDefault();up?signUp(user.value,pass.value):signIn(user.value,pass.value)}},
  h("h2",{text:W.welcome}),
  h("p",{class:"hint",text:W.about}),
  h("label",{class:"field"},h("span",{class:"label",text:W.user}),user),
  h("label",{class:"field"},h("span",{class:"label",text:W.pass}),pass),
  !supabase?h("p",{class:"hint warn",role:"alert",text:W.noConfig}):null,
  S.authMsg?h("p",{class:"hint warn",role:"alert",text:W[S.authMsg]||S.authMsg}):null,
  h("button",{id:"signin-btn",class:"btn primary",type:"submit",disabled:S.authBusy||!supabase,text:S.authBusy?W.wait:(up?W.signup:W.signin)}),
  h("button",{id:"mode-btn",class:"linkbtn",type:"button",onclick:()=>{S.authMode=up?"signin":"signup";S.authMsg="";render()},text:up?W.toSignin:W.toSignup}),
  up?null:h("div",{class:"demo"},h("b",{text:W.demoInfo+": "}),h("code",{dir:"ltr",text:DEMO.email+" / "+DEMO.pass}),
   h("div",null,h("button",{id:"demo-btn",class:"linkbtn",type:"button",disabled:S.authBusy||!supabase,onclick:()=>{user.value=DEMO.email;pass.value=DEMO.pass;signIn(DEMO.email,DEMO.pass)},text:W.useDemo}))),
  h("p",{class:"note",text:W.proto}))}

/* ---------- accounts (Supabase Auth) ---------- */
function authError(e){const m=String(e&&e.message||"").toLowerCase();
 if(m.includes("invalid login"))return "badLogin";
 if(m.includes("not confirmed"))return "notConfirmed";
 if(m.includes("already registered")||m.includes("already exists"))return "exists";
 if(m.includes("password")&&m.includes("6"))return "shortPass";
 if(m.includes("fetch")||m.includes("network"))return "loginFail";
 return e&&e.message||"loginFail"}

async function signIn(email,pass){if(!supabase||S.authBusy)return;
 S.authBusy=true;S.authMsg="";render();
 const {error}=await supabase.auth.signInWithPassword({email:email.trim(),password:pass});
 S.authBusy=false;if(error){S.authMsg=authError(error);render()}}

async function signUp(email,pass){if(!supabase||S.authBusy)return;
 S.authBusy=true;S.authMsg="";render();
 const {data,error}=await supabase.auth.signUp({email:email.trim(),password:pass});
 S.authBusy=false;
 if(error){S.authMsg=authError(error);render();return}
 if(!data.session){S.authMode="signin";S.authMsg="checkEmail";render()}}

async function signOut(){if(supabase)await supabase.auth.signOut();S.user=null;render();scrollTo(0,0)}

function setUser(u){const was=S.user&&S.user.id;S.user=u?{id:u.id,email:u.email}:null;S.authReady=true;
 if((S.user&&S.user.id)!==was){S.authMsg="";saved=[];S.view={src:"lib",id:"david"};if(S.user){scrollTo(0,0);loadSaved()}}
 render()}

/* ---------- saved lessons (Supabase table saved_lessons; each teacher can only reach their own rows) ---------- */
const fromRow=(r)=>Object.assign({},r.lesson,{id:r.id,createdAt:Date.parse(r.created_at)});
const toRow=(item)=>({user_id:S.user.id,lesson:{lang:item.lang,age:item.age,story:item.story,from:item.from||null,lesson:item.lesson}});

async function loadSaved(){const who=S.user&&S.user.id;S.loadingSaved=true;render();
 const {data,error}=await supabase.from("saved_lessons").select("id,lesson,created_at").order("created_at",{ascending:false});
 if(!S.user||S.user.id!==who)return;
 S.loadingSaved=false;
 if(error){render();toast(t().saveFail);return}
 saved=data.map(fromRow);if(saved.length&&S.view.src==="lib"&&S.view.id==="david")S.view={src:"saved",id:saved[0].id};
 render()}

async function addSaved(item){
 const {data,error}=await supabase.from("saved_lessons").insert(toRow(item)).select("id,lesson,created_at").single();
 if(error)return null;
 const s=fromRow(data);saved.unshift(s);return s}

async function updateSaved(item){const {error}=await supabase.from("saved_lessons").update({lesson:toRow(item).lesson}).eq("id",item.id);return !error}

async function saveReady(){const c=current();if(!c.lib||S.savingLib)return;
 S.savingLib=true;render();
 const s=await addSaved({lang:c.lang,age:S.age,story:c.lesson.title,from:c.id,lesson:JSON.parse(JSON.stringify(c.lesson))});
 S.savingLib=false;
 if(s){S.view={src:"saved",id:s.id};render();toast(t().savedAs)}else{render();toast(t().saveFail)}}

function bookSvg(){const ns="http://www.w3.org/2000/svg",s=document.createElementNS(ns,"svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width","22");s.setAttribute("height","22");
 s.innerHTML='<path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z"/><path stroke="currentColor" stroke-width="2" d="M12 6v13.5"/>';return s}

function setLang(l){S.lang=l;lsSet(LS.lang,l);S.error="";render()}
function setAge(a){S.age=a;lsSet(LS.age,a);render()}

function planner(W,storyVal){
 const make=h("button",{id:"make-btn",class:"btn primary",type:"submit",disabled:!canMake()||!!S.busy,text:W.make});
 const input=h("input",{id:"story-in",type:"text",placeholder:W.ph,"aria-label":W.story,autocomplete:"off"});input.value=storyVal;
 const form=h("form",{class:"make",onsubmit:(e)=>{e.preventDefault();makeLesson(input.value)}},input,make);
 let hint=null;
 if(S.error)hint=h("p",{class:"hint warn",role:"alert",text:S.error});
 return h("section",{class:"planner","aria-labelledby":"plan-h"},
  h("h2",{id:"plan-h",text:W.plan}),
  h("div",null,h("span",{class:"label",text:W.age}),
   h("div",{class:"row"},...["4-6","7-9","10-13","mixed"].map(a=>h("button",{id:"age-"+a,class:"chip","aria-pressed":String(S.age===a),onclick:()=>setAge(a),text:W.ages[a]})))),
  h("div",null,h("span",{class:"label",text:W.time}),h("span",{class:"timechip",text:"⏱ "+W.min30})),
  h("div",null,h("span",{class:"label",text:W.quick}),
   h("div",{class:"row"},...LIB.map(e=>h("button",{id:"lib-"+e.id,class:"chip lib",onclick:()=>openLesson({src:"lib",id:e.id}),text:e[S.lang].title})))),
  canMake()?h("div",null,h("span",{class:"label",text:W.or}),form):null,
  S.busy?h("div",{class:"progress",role:"status"},h("span",{class:"dots","aria-hidden":"true"},h("i"),h("i"),h("i")),
    h("span",{style:"flex:1"},S.busy.kind==="games"?W.regenning:W.writing," ",h("small",{id:"words"})),
    h("button",{class:"btn ghost small",onclick:()=>ctl&&ctl.abort(),text:W.stop})):null,
  hint)}

function openLesson(v){S.view=v;S.error="";render();document.getElementById("lesson")?.scrollIntoView({behavior:"smooth",block:"start"})}

function lessonView(W){
 const c=current(),L=c.lesson,LW=T[c.lang];
 const segs=SEGS.filter(s=>s[0]!=="game2"||L.games.length>1);
 const total=segs.reduce((a,s)=>a+s[1],0);
 const bar=h("div",{class:"timebar",role:"img","aria-label":`${total} min`},...segs.map(s=>h("span",{class:s[2]==="--seg-game"?"g":"",style:`flex:${s[1]};background:var(${s[2]})`,title:`${LW.seg[s[0]]} · ${s[1]} min`,text:String(s[1])})));
 const legend=h("ul",{class:"legend"},...segs.map(s=>h("li",null,h("i",{style:`background:var(${s[2]})`}),`${LW.seg[s[0]]} ${s[1]}′`)));
 const ageTip=L.ageTip||(L.ageTips&&(c.age==="mixed"?null:L.ageTips[c.age]));
 const ageTipAll=!L.ageTip&&L.ageTips&&c.age==="mixed";
 const sec=(key,title,...body)=>h("section",{class:"sec"},h("header",null,h("h3",{text:title}),h("span",{class:"min",text:SEGS.find(s=>s[0]===key)[1]+" min"})),...body);
 const gameCard=(g,i)=>h("article",{class:"game"},
  h("header",{style:"display:flex;justify-content:space-between;gap:10px;align-items:baseline"},h("h3",{text:`${LW.seg["game"+(i+1)]}: ${g.name}`}),h("span",{class:"min",text:"5 min"})),
  g.link?h("p",{class:"link"},h("b",{text:LW.link+": "}),g.link):null,
  h("ol",null,...g.steps.map(s=>h("li",{text:s}))),
  g.materials?h("p",{class:"mat"},h("b",{text:LW.mat+" "}),g.materials):null);
 const madeNote=!c.lib&&c.lang!==S.lang?h("p",{class:"note",text:T[c.lang].madeIn}):null;
 return h("article",{id:"lesson",class:"lesson",lang:c.lang,dir:c.lang==="ur"?"rtl":"ltr"},
  h("div",{class:"lhead"},
   h("div",{class:"meta"},h("span",{text:c.lib?LW.readyMade:LW.mine}),h("span",{text:LW.ages[c.age]}),h("span",{text:LW.min30})),
   h("h2",{text:L.title}),L.ref?h("div",{class:"ref",text:L.ref}):null,
   L.verse.text?h("blockquote",{class:"verse"},h("b",{text:`${LW.verse} · ${L.verse.ref}`}),L.verse.text):null,
   L.bigIdea?h("p",{class:"big"},LW.big+": ",L.bigIdea):null),
  madeNote,
  h("div",null,bar),legend,
  h("div",{class:"bring"},h("b",{text:LW.bring}),materialsOf(L)),
  ageTip?h("div",{class:"tip"},h("b",{text:LW.ageTip+": "}),ageTip):null,
  ageTipAll?h("div",{class:"tip"},h("b",{text:LW.ageTip+":"}),h("ul",{style:"margin:4px 0 0;padding-inline-start:1.2em"},...["4-6","7-9","10-13"].map(a=>h("li",null,h("b",{text:LW.ages[a]+": "}),L.ageTips[a])))):null,
  sec("opening",LW.seg.opening,h("p",{text:L.opening})),
  sec("story",LW.seg.story,h("p",{text:L.story}),L.tips.length?h("div",{class:"tip"},h("b",{text:LW.tips}),h("ul",{style:"margin:4px 0 0"},...L.tips.map(x=>h("li",{text:x})))):null),
  sec("questions",LW.seg.questions,h("ol",null,...L.questions.map(q=>h("li",{text:q})))),
  h("div",{class:"games"},...L.games.map(gameCard)),
  sec("activity",`${LW.seg.activity}: ${L.activity.name}`,h("ol",null,...L.activity.steps.map(s=>h("li",{text:s}))),L.activity.materials?h("p",{class:"mat"},h("b",{text:LW.mat+" "}),L.activity.materials):null),
  sec("prayer",LW.seg.prayer,h("p",{text:L.prayer}),h("p",{class:"note",text:LW.readBible})),
  h("div",{class:"actions",dir:S.lang==="ur"?"rtl":"ltr",lang:S.lang},
   c.lib?(()=>{const done=saved.some(x=>x.from===c.id&&x.lang===c.lang&&x.age===S.age);
    return h("button",{id:"save-btn",class:"btn primary small",disabled:done||S.savingLib||S.loadingSaved,onclick:saveReady,text:done?t().savedDone:(S.savingLib?t().wait:t().saveBtn)})})():null,
   h("button",{id:"copy-btn",class:"btn ghost small",onclick:copyLesson,text:t().copy}),
   canMake()?h("button",{id:"regen-btn",class:"btn ghost small",disabled:!!S.busy,onclick:newGames,text:t().regen}):null))}

function shelves(W){
 const cur=S.view;
 const lib=h("section",{class:"shelf"},h("h2",{text:W.readyMade}),
  h("div",{class:"cards"},...LIB.map(e=>h("button",{class:"card","aria-current":String(cur.src==="lib"&&cur.id===e.id),onclick:()=>openLesson({src:"lib",id:e.id})},
   h("strong",{text:e[S.lang].title}),h("small",{text:e[S.lang].ref})))));
 const mine=h("section",{class:"shelf"},h("h2",{text:W.mine}),h("p",{class:"hint",text:W.mineHint}),
  S.loadingSaved?h("p",{class:"empty",text:W.loading}):saved.length?h("div",{class:"cards"},...saved.map(s=>h("div",{class:"card saved","aria-current":String(cur.src==="saved"&&cur.id===s.id)},
    h("button",{class:"open",onclick:()=>openLesson({src:"saved",id:s.id})},
     h("strong",{lang:s.lang,text:s.lesson.title}),h("small",{text:`${T[s.lang].ages[s.age]} · ${s.lang==="ur"?"اردو":"English"}`})),
    h("button",{class:"del","aria-label":W.del+": "+s.lesson.title,title:W.del,onclick:()=>removeSaved(s.id),text:"×"}))))
   :h("p",{class:"empty",text:W.mineEmpty}));
 return h("div",null,lib,mine)}

async function removeSaved(id){const i=saved.findIndex(x=>x.id===id);if(i<0)return;
 const [item]=saved.splice(i,1);
 if(S.view.src==="saved"&&S.view.id===id)S.view={src:"lib",id:"david"};
 S.lastRemoved={item,i};
 toast(t().removed,{label:t().undo,fn:undoRemove});
 const {error}=await supabase.from("saved_lessons").delete().eq("id",id);
 if(error){saved.splice(Math.min(i,saved.length),0,item);S.lastRemoved=null;render();toast(t().saveFail)}}

async function undoRemove(){const r=S.lastRemoved;if(!r)return;S.lastRemoved=null;S.toast="";render();
 const s=await addSaved(r.item);if(!s){toast(t().saveFail);return}
 saved.sort((a,b)=>b.createdAt-a.createdAt);render()}

function toastEl(){const a=S.toast.action;
 return h("div",{class:"toast",role:"status"},S.toast.msg,a?h("button",{style:"margin-inline-start:12px;background:none;border:0;color:var(--accent);font-weight:800;text-decoration:underline",onclick:a.fn,text:a.label}):null)}

/* ---------- boot ---------- */
addEventListener("online",()=>{S.net=true;S.error="";render()});
addEventListener("offline",()=>{S.net=false;render()});
render();
if(supabase){
 supabase.auth.getSession().then(({data})=>setUser(data.session&&data.session.user));
 supabase.auth.onAuthStateChange((_event,session)=>setUser(session&&session.user));
}else{S.authReady=true;render()}
}
