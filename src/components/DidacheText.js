import React, { Component } from "react";
import { Container, Content, Accordion } from "native-base";
import DidacheHeader from './DidacheHeader';
import DFooter from './DFooter';

const dataArray = [
  { title: "Chapter 1", content: `1. There are two Ways, one of Life and one of Death, and there is a great difference between the two Ways.

2. The way of life is this:" First, you shalt love the God who made thee, secondly, thy neighbor as thyself; and whatsoever thou wouldst not have done to thyself, do not thou to another."

3. Now, the teaching of these words is this: "Bless those that curse you, and pray for your enemies, and fast for those that persecute you. For what credit is it to you if you love those that love you? Do not even the heathen do the same?" But, for your part, "love those that hate you," and you will have no enemy.

4. "Abstain from carnal" and bodily "lusts." "If any man smite thee on the right cheek, turn to him the other cheek also," and thou wilt be perfect. "If any man impress thee to go with him one mile, go with him two. If any man take thy coat, give him thy shirt also. If any man will take from thee what is thine, refuse it not," not even if thou canst.

5. Give to everyone that asks thee, and do not refuse, for the Father's will is that we give to all from the gifts we have received. Blessed is he that gives according to the mandate; for he is innocent; but he who receives it without need shall be tried as to why he took and for what, and being in prison he shall be examined as to his deeds, and "he shall not come out thence until he pay the last farthing."

6. But concerning this it was also said, "Let thine alms sweat into thine hands until thou knowest to whom thou art giving."`}
 ,
  { title: "Chapter 2", content: `1. But the second commandment of the teaching is this:

2. "Thou shalt do no murder; thou shalt not commit adultery"; thou shalt not commit sodomy; thou shalt not commit fornication; thou shalt not steal; thou shalt not use magic; thou shalt not use philtres; thou shalt not procure abortion, nor commit infanticide; "thou shalt not covet thy neighbor's goods";

3. Thou shalt not commit perjury, "thou shall not bear false witness"; thou shalt not speak evil; thou shalt not bear malice.

4. Thou shalt not be double-minded nor double-tongued, for to be double-tongued is the snare of death.

5. Thy speech shall not be false nor vain, but completed in action.

6. Thou shalt not be covetous nor extortionate, nor a hypocrite, nor malignant, nor proud, thou shalt make no evil plan against thy neighbor.

7. Thou shalt hate no man; but some thou shalt reprove, and for some shalt thou pray, and some thou shalt love more then thine own life.`
 },
 { title: "Chapter 3", content: `1. My child, flee from every evil man and from all like him.

2. Be not proud, for pride leads to murder, nor jealous, nor contentious, nor passionate, for from all these murders are engendered.

3. My child, be not lustful, for lust leads to fornication, nor a speaker of base words, nor a lifter up of the eyes, for from all these is adultery engendered.

4. My child, regard not omens, for this leads to idolatry; neither be an enchanter, nor an astrologer, nor a magician, neither wish to see these things, for from them all is idolatry engendered.

5. My child, be not a liar, for lying leads to theft, nor a lover of money, nor vain-glorious, for from all these things are thefts engendered.

6. My child, be not a grumbler, for this leads to blasphemy, nor stubborn, nor a thinker of evil, for from all these are blasphemies engendered.

7. But be thou "meek, for the meek shall inherit the earth;"

8. Be thou long-suffering, and merciful and guileless, and quiet, and good, and ever fearing the words which thou hast heard.

9. Thou shalt not exalt thyself, nor let thy soul be presumptuous. Thy soul shall not consort with the lofty, but thou shalt walk with righteous and humble men.

10. Receive the accidents that befall to thee as good, knowing that nothing happens without God.`},
  { title: "Chapter 4", content: `1. My child, thou shalt remember, day and night, him who speaks the word of God to thee, and thou shalt honor him as the Lord, for where the Lord's nature is spoken of, there is he present.

2. And thou shalt seek daily the presence of the saints, that thou mayest find rest in their words.

3. Thou shalt not desire a schism, but shalt reconcile those that strive. Thou shalt give righteous judgement; thou shalt favor no mans person in reproving transgression.

4. Thou shalt not be of two minds whether it shall be or not.

5. Be not one who stretches out his hands to receive, but shuts them when it comes to giving.

6. Of whatsoever thou hast gained by thy hands thou shalt give a ransom for thy sins.

7. Thou shalt not hesitate to give, nor shalt thou grumble when thou givest, for thou shalt know who is the good Paymaster of the reward.

8. Thou shalt not turn away the needy, but shalt share everything with thy brother, and shalt not say it is thine own, for if you are sharers in the imperishable, how much more in the things which perish?

9. Thou shalt not withhold thine hand from thy son or from thy daughter, but thou shalt teach them the fear of God from their youth up.

10. Thou shalt not command in thy bitterness thy slave or thine handmaid, who hope in the same God, lest they cease to fear the God who is over you both; for he comes not to call men with respect of persons, but those whom the Spirit has prepared.

11. But do you who are slaves be subject to your master, as to God's representative, in reverence and fear.

12. Thou shalt hate all hypocrisy, and everything that is not pleasing to the Lord.

13. Thou shalt not forsake the commandments of the Lord, but thou shalt keep what thou didst receive, "Adding nothing to it and taking nothing away."

14. In the congregation thou shalt confess thy transgressions, and thou shalt not betake thyself to prayer with an evil conscience. This is the way of life.`},
{ title: "Chapter 5", content: `1. But the Way of Death is this: First of all, it is wicked and full of cursing, murders, adulteries, lusts, fornications, thefts, idolatries, witchcrafts, charms, robberies, false witness, hypocrisies, a double heart, fraud, pride, malice, stubbornness, covetousness, foul speech, jealousy, impudence, haughtiness, boastfulness.

2. Persecutors of the good, haters of truth, lovers of lies, knowing not the reward of righteousness, not cleaving to the good nor to righteous judgment, spending wakeful nights not for good but for wickedness, from whom meekness and patience is far, lovers of vanity, following after reward, unmerciful to the poor, not working for him who is oppressed with toil, without knowledge of him who made them, murderers of children, corrupters of God's creatures, turning away the needy, oppressing the distressed, advocates of the rich, unjust judges of the poor, altogether sinful; may ye be delivered, my children, from all these.`},
{ title: "Chapter 6", content: `1. See "that no one make thee to err" from this Way of the teaching, for he teaches thee without God.

2. For if thou canst bear the whole yoke of the Lord, thou wilt be perfect, but if thou canst not, do what thou canst.

3. And concerning food, bear what thou canst, but keep strictly from that which is offered to idols, for it is the worship of dead gods.`},
{ title: "Chapter 7", content: `1. Concerning baptism, baptise thus: Having first rehearsed all these things, "baptise, in the Name of the Father and of the Son and of the Holy Ghost," in running water;

2. But if thou hast no running water, baptise in other water, and if thou canst not in cold, then in warm.

3. But if thou hast neither, pour water three times on the head "in the Name of the Father, Son and Holy Ghost."

4. And before the baptism let the baptiser and him who is to be baptised fast, and any others who are able. And thou shalt bid him who is to be baptised to fast one or two days before.` },
{ title: "Chapter 8", content: `1. Let not your fasts be with the hypocrites, for they fast on Mondays and Thursdays, but do you fast on Wednesdays and Fridays.

2. And do not pray as the hypocrites, but as the Lord commanded in his Gospel, pray thus: "Our Father, who art in Heaven, hallowed be thy Name, thy Kingdom come, thy will be done, as in Heaven so also upon earth; give us today our daily bread, and forgive us our debt as we forgive our debtors, and lead us not into trial, but deliver us from the Evil One, for thine is the power and the glory for ever."

3. Pray thus three times a day.`},

{ title: "Chapter 9", content: `
1. And concerning the Eucharist, hold Eucharist thus:
2. First concerning the Cup, "We give thanks to thee, our Father, for the Holy Vine of David thy child, which, thou didst make known to us through Jesus thy Child; to thee be glory for ever."

3. And concerning the broken Bread: "We give thee thanks, our Father, for the life and knowledge which thou didst make known to us through Jesus thy Child. To thee be glory for ever.

4. As this broken bread was scattered upon the mountains, but was brought together and became one, so let thy Church be gathered together from the ends of the earth into thy kingdom, for thine is the glory and the power through Jesus Christ for ever."

5. But let none eat or drink of your Eucharist except those who have been baptised in the Lord's Name. For concerning this also did the Lord say, "Give not that which is holy to the dogs."`},

{ title: "Chapter 10", content: `1. But after you are satisfied with food, thus give thanks:

2. "We give thanks to thee, O Holy Father, for thy Holy Name which thou didst make to tabernacle in out hearts, and for the knowledge and faith and immortality which thou didst make known to us through Jesus thy Child. To thee be glory for ever.

3. Thou, Lord Almighty, didst create all things for thy Name's sake, and didst give food and drink to men for their enjoyment, that they might give thanks to thee, but us hast thou blessed with spiritual food and drink and eternal light through thy Child.

4. Above all we give thanks to thee for that thou art mighty. To thee be glory for ever.

5. Remember, Lord, thy Church, to deliver it from all evil and to make it perfect in thy love, and gather it together in its holiness from the four winds to thy kingdom which thou hast prepared for it. For thine is the power and the glory for ever.

6. Let grace come and let this world pass away. Hosannah to the God of David. If any man be holy, let him come! if any man be not, let him repent: Maranatha ("Our Lord! Come!"), Amen."

7. But suffer the prophets to hold Eucharist as they will.`},

{ title: "Chapter 11", content: `1. Whosoever then comes and teaches you all these things aforesaid, receive him.

2. But if the teacher himself be perverted and teach another doctrine to destroy these things, do not listen to him, but if his teaching be for the increase of righteousness and knowledge of the Lord, receive him as the Lord.

3. And concerning the Apostles and Prophets, act thus according to the ordinance of the Gospel.

4. Let every Apostle who comes to you be received as the Lord,

5. But let him not stay more than one day, or if need be a second as well; but if he stay three days, he is a false prophet.

6. And when an Apostle goes forth let him accept nothing but bread till he reach his night's lodging; but if he ask for money, he is a false prophet.

7. Do not test or examine any prophet who is speaking in a spirit, "for every sin shall be forgiven, but this sin shall not be forgiven."

8. But not everyone who speaks in a spirit is a prophet, except he have the behaviour of the Lord. From his behaviour, then, the false prophet and the true prophet shall be known.

9. And no prophet who orders a meal in a spirit shall eat of it: otherwise he is a false prophet.

10. And every prophet who teaches truth, if he do not what he teaches, is a false prophet.

11. But no prophet who has been tried and is genuine, though he enact a worldly mystery of the Church, if he teach not others to do what he does himself, shall be judged by you: for he has his judgment with God, for so also did the prophets of old.

12. But whosoever shall say in a spirit "Give me money, or something else," you shall not listen to him; but if he tell you to give on behalf of others in want, let none judge him.` },

{ title: "Chapter 12", content: `1. Let everyone who "comes in the Name of the Lord" be received; but when you have tested him you shall know him, for you shall have understanding of true and false.

2. If he who comes is a traveller, help him as much as you can, but he shall not remain with you more than two days, or, if need be, three.

3. And if he wishes to settle among you and has a craft, let him work for his bread.

4. But if he has no craft provide for him according to your understanding, so that no man shall live among you in idleness because he is a Christian.

5. But if he will not do so, he is making traffic of Christ; beware of such.` },

{ title: "Chapter 13", content: `1. But every true prophet who wishes to settle among you is "worthy of his food."

2. Likewise a true teacher is himself worthy, like the workman, of his food.

3. Therefore thou shalt take the firstfruit of the produce of the winepress and of the threshingfloor and of oxen and sheep, and shalt give them as the firstfruits to the prophets, for they are your high priests.

4. But if you have not a prophet, give to the poor.

5. If thou makest bread, take the firstfruits, and give it according to the commandment.

6. Likewise when thou openest a jar of wine or oil, give the firstfruits to the prophets.

7. Of money also and clothes, and of all your possessions, take the firstfruits, as it seem best to you, and give according to the commandment.`},

{ title: "Chapter 14", content: `1. On the Lord's Day of the Lord come together, break bread and hold Eucharist, after confessing your transgressions that your offering may be pure;

2. But let none who has a quarrel with his fellow join in your meeting until they be reconciled, that your sacrifice be not defiled.

3. For this is that which was spoken by the Lord, "In every place and time offer me a pure sacrifice, for I am a great king," saith the Lord, "and my name is wonderful among the heathen."`},

{ title: "Chapter 15", content: `1. Appoint therefore for yourselves bishops and deacons worthy of the Lord, meek men, and not lovers of money, and truthful and approved, for they also minister to you the ministry of the prophets and teachers.

2. Therefore do not despise them, for they are your honourable men together with the prophets and teachers.

3. And reprove one another not in wrath but in peace as you find in the Gospel, and let none speak with any who has done wrong to his neighbour, nor let him hear a word from you until he repents.

4. But your prayers and alms and all your acts perform as ye find in the Gospel of our Lord.`},

{ title: "Chapter 16", content: `1. "Watch" over your life "let your lamps" be not quenched "and your loins" be not ungirded, but be "ready," for ye know not "the hour in which our Lord cometh."

2. But be frequently gathered together seeking the things which are profitable for your souls, for the whole time of your faith shall not profit you except ye be found perfect at the last time;

3. For in the last days the false prophets and the corruptors shall be multiplied, and the sheep shall be turned into wolves, and love shall change to hate;

4. For as lawlessness increaseth they shall hate one another and persecute and betray, and then shall appear the deceiver of the world as a Son of God, and shall do signs and wonders and the earth shall be given over into his hands and he shall commit iniquities which have never been since the world began.

5. Then shall the creation of mankind come to the fiery trial and "many shall be offended" and be lost, but "they who endure" in their faith "shall be saved" by the curse itself.

6. And "then shall appear the signs" of the truth. First the sign spread out in Heaven, then the sign of the sound of the trumpet, and thirdly the resurrection of the dead:

7. But not of all the dead, but as it was said, "The Lord shall come and all his saints with him."

8. Then shall the world "see the Lord coming on the clouds of Heaven."` }



];
const DidacheText = () =>  {
    return (
      <Container>
        <DidacheHeader />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />

        </Content>
      </Container>

    );
  }


export default DidacheText;
