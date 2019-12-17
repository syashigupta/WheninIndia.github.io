function hashmapel(elem, key)
{
  hashmap(key);
  for(var i=0; i<8;i++)
  {
    document.getElementsByTagName('h3')[i].style.color="white";
  }
  document.getElementsByTagName('h3')[key-1].style.color="rgba(255,70,10,1)";
  //document.getElementById(elem).style.backgroundColor="pink";
}
function hashmap(key){
  var dict={};
  dict[0]= "&#x22;The most popular street food from Mumbai, so much so that Mumbai is almost synonymous to Vada Pav. It is basically Batata Vada sandwiched between slices of Pav along with a generous amount of sweet and spicy chutneys. It might seem like a lot of hard work but its actually pretty quick and easy to make at home.	&#x22;";
  dict[1]="&#x22;A popular street food (chaat) that has its origins in North India, Dahi Papdi Chaat is a tasty and quick snack to make. The best part about chaat snacks is that in one bite you get to taste so many different flavours. The different types of chutneys that are used in making of this snack recipe are symbolic of street foods of India. Almost all street foods are incomplete without these chutneys.&#x22;";
  dict[2]="&#x22;Crisp, crunchy and an absolutely delicious pop up for the taste buds, Golgappa is a street food loved by one and all. Fill them with any flavoured water or tamarind chutney, sweet chutney, Khatta Pani Puri ka Paani – they create a party on your palate.	&#x22;";
  dict[3]="&#x22;Plain paratha- crisp as well as soft unleavened whole wheat flat indian bread. Plain paratha are popular breakfast or tiffin recipe that can be served with pickle or any side veggie dish.&#x22;";
  dict[5]="&#x22;Matar kulcha is one of the popular street food of north india. The whole curry of matar is semi thick and has a tangy taste and flavor.	&#x22;";
  dict[6]="&#x22;Pav Bhaji is one of the most popular Indian snacks, specially in Maharshatra. It is a delicious combination of different vegetables cooked and mashed together. This is one dish, loved by people of all ages and cooked with different variations in different households. Pav Bhaji is the smartest way to have all the healthy vegetables together without compromising on the taste.	&#x22;";
  dict[7]="&#x22;Butter chicken was reportedly developed in the early 20th century in Delhi as a way to use leftover tandoori chicken so that the dried out chicken pieces can be softened with tomatoes, butter, and cream. Butter chicken is usually creamier, while chicken tikka masala, which was developed in the UK, tends to be spicier.	&#x22;";
  hashmaprecipe(key);
  hashmapcooktime(key);
  //shift(side1, buttonselected);
  var modal2text =document.getElementById('clickmodalcontent');
  modal2text.innerHTML = dict[key-1];
}
