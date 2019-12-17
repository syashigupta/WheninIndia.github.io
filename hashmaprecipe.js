function hashmaprecipe(key)
{
  var ingrediv = document.getElementById('changemyrecipe');
  var ingredients={};
  ingredients[0]="   <table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Batata Vada:</td><td></td><td></td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td></td> <td>2 Tbsp</td> <td>Oil </td></tr>\
                      <tr><td></td><td> 1 Tsp</td><td> Mustard Seeds</td></tr>\
                      <tr><td></td><td>3 Tbsp</td><td> Curry Leaves \(Preferably Fresh \)</td></tr>\
                      <tr><td></td><td> 3 Pieces</td><td> Garlic Cloves Peeled</td> </tr>\
                      <tr><td></td><td> 1 Inch</td><td> Ginger </td></tr>\
                      <tr><td></td><td> 3 Pieces</td><td> Green Chilies</td></tr>\
                      <tr><td></td><td> 1/4 Tsp </td><td>Turmeric</td></tr>\
                      <tr><td></td><td> 2 Cups</td><td> Potatoes\, Boiled\, Peeled & Mashed</td></tr>\
                      <tr><td></td><td></td><td> Salt To Taste</td></tr>\
                      <tr><td></td><td> 1 Tbsp</td><td> Coriander Leaves, Chopped</td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Batter:</td><td></td><td></td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td></td><td> 2 Cups</td><td> Besan/Gram Flour</td></tr>\
                      <tr><td></td><td> 1 Tbsp</td><td> Rice Flour</td></tr>\
                      <tr><td></td><td> </td><td> Salt To Taste</td></tr>\
                      <tr><td></td><td>  1/4 Tsp</td><td> Turmeric</td></tr>\
                      <tr><td></td><td> </td><td>Water, As Required For Making The Batter</td></tr>\
                      <tr><td></td><td> </td><td> Oil For To Deep-Frying</td></tr>\
                      <tr><td></td><td> </td><td>Pinch Of Baking Soda – Optional</td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Dry Garlic Chutney:</td><td></td><td></td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td></td><td> 1/4 Cup</td><td> Grated, Or Desiccated Coconut</td></tr> \
                      <tr><td></td><td> 4 Tbsp</td><td> Peanuts</td>\
                      <tr><td></td><td> 5-6 </td><td>Small Dried Red Chilies</td></tr> \
                      <tr><td></td><td> 2 Tsp </td><td>Sesame Seeds</td></tr> \
                      <tr><td></td><td> 10-12 </td><td>Garlic Cloves, Peeled</td></tr> \
                      <tr><td></td><td> </td><td>Salt To Taste</td></tr>\
                      <tr><td></td><td> 2 Tbsp </td><td>Kashmiri Red Chili Powder</td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Assembling Vada Pav:</td><td></td><td></td></tr>\
                        <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                      <tr><td></td><td> 8 </td><td>Batata Vada</td></tr>\
                      <tr><td></td><td>8</td><td> Ladi Pav</td></tr>\
                      <tr><td></td><td> </td><td>Dry Garlic Chutney</td></tr>\
                      <tr><td></td><td> </td><td>Green Coriander Chutney</td></tr>\
                      <tr><td></td><td></td><td> Tamarind Chutney</td></tr>\
                      <tr><td></td><td> </td><td>Fried Green Chilis</td></tr></table></br></br>\
                      <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                                      - Slice open a soft and fluffy homemade dinner roll called pav. Then simply slather on some green coriander chutney, then some tamarind chutney.</br>\
                                      - Top it with oodles of dry garlic chutney aka vada pav chutney, or lehsun ki chutney. Yes, if you are a chili lover then don’t be afraid of this spicy garlic chutney. Feel free to sprinkle a generous quantity of garlic chutney over tamarind and green chutney.</br>\
                                      - Then press the piping hot vada on the pav. Cover it with the other half of the pav and wrap it in a piece of old newspaper, if you want that real feel.</br>\
                                      - The one last thing is the addition of a fried green chili. This is just in case if you think it’s not spicy enough for you.</br>";

  ingredients[1]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                  <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                <tr><td style='visibility:hidden;'>Assembling Vada Pav:</td><td>15</td><td> Papdi</td></tr>\
                <tr><td></td><td>1/2 Tsp</td><td> Powdered Cumin Powder</td></tr>\
                <tr><td></td><td>1/4 Tsp</td><td> Powdered Red Chilli</td></tr>\
                <tr><td></td><td>1 Tsp</td><td> Salt</td></tr>\
                <tr><td></td><td>1 Tbsp</td><td> Crushed To Paste Mint Leaves</td></tr>\
                <tr><td></td><td>1/2 Tsp</td><td> Chilli Garlic Paste</td></tr>\
                <tr><td></td><td>2 Tbsp </td><td>Sweet Tamarind Sauce</td></tr>\
                <tr><td></td><td>1/4 Tsp </td><td>Powdered Chaat Masala Powder</td></tr>\
                <tr><td></td><td>1 Tsp </td><td>Sugar</td></tr>\
                <tr><td></td><td>1 Tbsp </td><td>Coriander Chutney</td></tr>\
                <tr><td></td><td>2 Tsp</td><td> Chopped Coriander Leaves</td></tr>\
                 <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For Garnishing:</td><td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                <tr><td></td><td>3 Tbsp</td><td> Sev For Toppings</td></tr>\
                <tr><td></td><td>1 Cup</td><td> Beaten yoghurt (curd)</td></tr>\
                <tr><td></td><td>1/4 Cup</td><td> Bean Mung</td></tr></table></br></br>\
                <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                - Prepare all the ingredients and arrange them before starting the assembling process. Take two deep serving plates and arrange 7-papadis in each of them. You can either keep papdis whole or lightly break them into small pieces.</br>\
                - Mix 2-tablespoons green chutney with chickpeas.</br>\
                - Top each plate with 1/3 cup potatoes and 1/4 cup onion.</br>\
                - Top each plate with 1/3 cup chickpeas.</br>\
                - Top each plate with 1/4 cup moong beans.</br>\
                - Drizzle 1/4 cup curd over each plate.</br>\
                - Drizzle 2½ tablespoons date tamarind chutney over each plate.</br>\
                - Top each plate with 1½ tablespoons green chutney. Papri Chaat is ready for serving. Enjoy it immediately.</br>";
  ingredients[2]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                  <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                <tr><td style='visibility:hidden;''> Assembling Vada Pav:</td><td>1 Cup</td><td> Fine Sooji</td></tr>\
                <tr><td></td><td>2 Tbsp</td><td> Maida</td></tr>\
                <tr><td></td><td>1/2 Tsp </td><td>Salt</td></tr>\
                <tr><td></td><td></td><td>Warm water to knead the dough</td></tr>\
                <tr><td></td><td></td><td>Oil for frying</td></tr></table></br></br>\
                <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                - Mix sooji, maida and salt in a bowl.</br>\
                - Add warm water and knead to make dough of medium soft texture.</br>\
                - Cover the dough with a damp cloth and keep aside for 15 minutes.</br>\
                - Knead the dough once again for a minute and divide it into 4 equal parts.</br>\
                - Make the balls from the dough.</br>\
                - Roll the dough ball on slightly floured surface to make a thin circle.</br>\
                - Cut the circle into small 4-5 cm circle using a cookie cutter.</br>\
                - Heat oil for frying in a pan.</br>\
                - Once the oil is hot, reduce the heat to medium.</br>\
                - Slide the puri into the hot oil and fry until they puff up and become golden brown.</br>\
                - Gently press the puri with the back of the ladle.</br>\
                - It will help to puff them up.</br>\
                - Flip the puri and fry from other side as well.</br>\
                - Remove the puri on a plate lined with kitchen towel.</br>\
                - Fry all the puri in the same manner.</br>\
                - Cool them and store in an airtight container.</br></br>\
                <strong style=\"font: 1rem 'Noto Sans', sans-serif;\"><center>SERVING</center></strong></br>\
                - Gently puncture each of the fried puris with a small knife or your finger to create a hole large enough to place the filling.</br></br>\
                <h4 style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Savory version</h4></br> \
                - Mix the potatoes, chickpeas, coriander chutney and 1 teaspoon tamarind chutney.  Add salt and pepper to taste.  Place the mix  in each of the punctured puris until filled.</br>\
                - Combine the dates, jaggery, cumin, chaat masala and water. Mix well. Pour in the shot glasses and add a bit of boondi leaving enough room for the pani puris to sit on top without getting wet.</br></br>\
                <h4 style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Sweet version </h4></br>\
                - Carefully coat the punctured puris in the melted chocolate and add sprinkles.  Chill the chocolate-covered pani puris in the refrigerator for 30 minutes, or until solid.</br>\
                - Fill the chocolate pani puris with the chopped nuts.</br>\
                - Pour the blended ice cream in the shot glasses and add a bit of chopped chocolate, leaving enough room for the pani puris to sit on top without getting wet.</br>\
                - Place the filled pani puris on top of the filled shot glasses.</br>\
                Enjoy!";

  ingredients[3]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'> Assembling Vada Pav:</td><td>2 Cups</td><td> Whole wheat flour (atta)</td></tr>\
                  <tr><td></td><td>1-2 Tsp</td><td> Oil or ghee</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td> Salt or add as required</td></tr>\
                  <tr><td></td><td></td><td>Water as required for kneading the dough</td></tr>\
                  <tr><td></td><td></td><td>Oil or ghee for roasting, add as required</td></tr></table></br></br>\
                  <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                  - In a bowl take whole wheat flour. add salt, oil and water.</br>\
                  - Mix and then knead into a smooth soft dough.</br>\
                  - Add more water if required while kneading.</br>\
                  - Cover and keep the dough aside for 30 minutes.</br>\
                  - Method to make square folded parantha:</br>\
                  - Roll a medium sized ball on a lightly dusted board to a circle of about 4 to 5 inches in diameter.</br>\
                  - Spread some ghee on the rolled dough.</br>\
                  - Bring one side of rolled dough towards the center and press lightly.</br>\
                  - Now spread again some ghee on the folded part.</br>\
                  - Fold the opposite side of the rolled dough on top of the folded part. press lightly.</br>\
                  - Again spread some ghee on this second folded part.</br>\
                  - Fold the right side and bring towards the center. spread some ghee on this fold too.</br>\
                  - Lastly fold the left side on top of the right fold.</br>\
                  - Sprinkle some flour on the folded parantha.</br>\
                  - Begin to roll. add some more flour if required while rolling. roll into a square parantha.</br></br>\
                  <h4 style=\"font: 0.9rem 'Noto Sans', sans-serif;\">Making Parantha</h4></br>\
                  - Heat tava (griddle) and place the parantha on the tava. the tawa should be medium hot.</br>\
                  - You will soon see the parantha puffing up from the base at some places.</br>\
                  - Flip the parantha when the base is 1/4 cooked. spread some ghee.</br>\
                  - Flip again when the second side is about 1/2 cooked. you will see brown spots now.</br>\
                  - Spread some ghee on this side now.</br>\
                  - Flip again a couple of times till you see more brown spots and the parantha is cooked evenly.</br>\
                  - Make all paranthas this way. either serve them hot or stack them in a roti basket.</br>\
                  - Serve these plain paranthas with any indian dal or vegetable curry or pickle.</br>";

  ingredients[4]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'>Assembling Vada Pav:</td><td>2</td><td> Cups puffed rice (murmura)</td></tr>\
                  <tr><td></td><td>1/2 Cup</td><td> Fine sev</td></tr>\
                  <tr><td></td><td>1 Cup</td><td> Finely chopped onions</td></tr>\
                  <tr><td></td><td>1 Cup</td><td> Boiled and cubed potatoes</td></tr>\
                  <tr><td></td><td>8 </td><td>Poories</td></tr>\
                  <tr><td></td><td>1 Tbsp</td><td> Green chutney- mixed together with water</td></tr>\
                  <tr><td></td><td>1/4 Cup</td><td> Date chutney-mixed together with water</td></tr>\
                  <tr><td></td><td>1 Tbsp</td><td> Lemon juice</td></tr>\
                  <tr><td></td><td>1 Tbsp</td><td> Salt</td></tr>\
                  <tr><td></td><td></td><td>Coriander leaves for garnish</td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For green chutney:</td><td></td><td></td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td></td><td></td><td>Coriander leaves</td></tr>\
                  <tr><td></td><td></td><td>Garlic</td></tr>\
                  <tr><td></td><td></td><td>Green chillies</td></tr>\
                  <tr><td></td><td></td><td>A little lemon juice</td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For Date Chutney:</td><td></td><td></td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td></td><td></td><td>Dried Dates-pureed</td></tr>\
                  <tr><td></td><td></td><td>Dried Powdered Ginger</table></td></tr></table></br></br>\
                  <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                  - Mix all together, garnish with sev and coriander leaves and serve.</br></br>\
                  <h4 style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For the green chutney:</h4></br>\
                  - Grind together equal quantities of coriander leaves, garlic to taste and green chillies and add some lemon juice.</br></br>\
                  <h4 style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For the date chutney:</h4></br>\
                  - Cook and puree dried dates and add some dried powdered ginger.</br>";

  ingredients[5]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For Pressure Cooking:<td></td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'>Assembling Vada Pav:</td><td>1 Cup</td><td> white Peas soaked overnight</td></tr>\
                  <tr><td></td><td>2 Cup</td><td>  Water</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td>  Salt</td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For Jaljeera Chutney:<td></td></td><td></td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td></td><td></td><td>Handful Pudina / Mint</td></tr>\
                  <tr><td></td><td></td><td>Small Piece Tamarind / Imli</td></tr>\
                  <tr><td></td><td>1 Pod</td><td> Black cardamom</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td> Pepper</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td> Cumin / Jeera</td></tr>\
                  <tr><td></td><td>1 Tsp</td><td> Saunf / Fennel</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td> Chaat Masala</td></tr>\
                  <tr><td></td><td>½ Tsp</td><td> Aamchur / Dry Mango Powder</td></tr>\
                  <tr><td></td><td>2 Tbsp</td><td> Water</td><tr>\
                  <tr><td></td><td>¼ Tsp</td><td> Salt</td><tr>\
                  <tr><td></td><td>3 Tsp</td><td> Oil</td><tr>\
                  <tr><td></td><td>¼ Tsp</td><td> Turmeric / Haldi</td><tr>\
                  <tr><td></td><td>½ Tsp</td><td> Kashmiri Red Chilli Powder / Lal Mirch Powder</td><tr>\
                  <tr><td></td><td>Pinch </td><td>Hing / Asafoetida</td><tr>\
                  <tr><td></td><td>¼ Tsp</td><td> Cumin Powder / Jeera Powder</td><tr>\
                  <tr><td></td><td>½ Tsp</td><td> Coriander Powder</td><tr>\
                  <tr><td></td><td>1 Inch</td><td> Ginger finely chopped\
                  <tr><td></td><td>¼ Tsp</td><td> Garam Masala\
                  <tr><td></td><td>½ Tsp </td><td>Chaat Masala\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style=\"font: 0.9rem 'Noto Sans', sans-serif;\">For Garnishing:<td></td></td><td></td></tr>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td></td><td>2 Tbsp </td><td>Onion finely chopped</td></tr>\
                  <tr><td></td><td>2 Tbsp </td><td>tomato finely chopped</td></tr>\
                  <tr><td></td><td></td><td>few coriander leaves finely chopped</td></tr>\
                  <tr><td></td><td>1 Inch</td><td> ginger julienne</td></tr>\
                  <tr><td></td><td>1 </td><td>Green Chilli slit</td></tr>\
                  <tr><td></td><td>¼ </td><td>lemon wedge</td></tr>\
                  <tr><td></td><td>1 Pinch</td><td> chaat masala</td></tr></table></br></br>\
                  <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                  - Firstly pressure cook 1 cup white peas, 2 cup water and ½ tsp salt.</br>\
                  - Now in a kadai heat 3 tsp oil and saute 1 inch ginger.</br>\
                  - Further saute spices.</br>\
                  - Additionally add in pressure cooked white peas and mix well.</br>\
                  - Mash slightly for desired consistency.</br>\
                  - Now add in prepared jaljeera chutney and mix well.</br>\
                  - Boil for 5 minutes or more adjusting consistency.</br>\
                  - Garnish with onion, tomato, coriander leaves, ginger, green chilli, lemon and chaat masala.</br>\
                  - Finally, serve matar kulcha recipe with plain kulcha or naan.</br>";

  ingredients[6]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'>Assembling Vada Pav:</td><td>2 Large</td><td> Potatoes boiled</td></tr>\
                  <tr><td></td><td>1/2 Small</td><td> Cauliflower boiled</td></tr>\
                  <tr><td></td><td>1/2 Large </td><td>Green Pepper boiled</td></tr>\
                  <tr><td></td><td>1/2 Cup </td><td>Frozen Green Peas boiled</td></tr>\
                  <tr><td></td><td>1 Tbsp</td><td> Vegetable Oil</td></tr>\
                  <tr><td></td><td>3 Tbsp </td><td>Butter, unsalted, divided</td></tr>\
                  <tr><td></td><td>1 Tsp </td><td>Cumin seeds</td></tr>\
                  <tr><td></td><td>2 Medium </td><td>Red Onion finely chopped</td></tr>\
                  <tr><td></td><td> 2 Inch </td><td>Ginger finely chopped</td></tr>\
                  <tr><td></td><td>7 </td><td>Garlic finely chopped</td></tr>\
                  <tr><td></td><td>2 </td><td>Green Chilies finely chopped, adjust to taste</td></tr>\
                  <tr><td></td><td>3 Large</td><td> Tomatoes finely chopped</td></tr>\
                  <tr><td></td><td>1/3 Cup</td><td> Tomato puree store bought</td></tr>\
                  <tr><td></td><td>1.25 Tsp</td><td> Salt divided</td></tr>\
                  <tr><td></td><td>1.25 Cups</td><td> Water divided</td></tr>\
                  <tr><td></td><td>1 Tsp + 1 Tsp</td><td> Pav Bhaji Masala</td></tr>\
                  <tr><td></td><td>1/2 Tsp</td><td> Red Chili Powder</td></tr>\
                  <tr><td></td><td>2 Tsp </td><td>Kasuri Methi, also known as dried fenugreek leaves</td></tr>\
                  <tr><td></td><td>3 Tbsp</td><td>Chopped cilantro</td></tr>\
                  <tr><td></td><td>1 </td><td>Lemon Juice</td></tr></table></br></br>\
                  <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                  - Boil the veggies first and keep them ready.</br>\
                  - Heat 1 tablespoon of butter and oil in a large pot on medium heat. Once the butter melts and oil is hot, add the cumin seeds and let them sizzle.</br>\
                  - Add the chopped onions and mix. I like to use my food processor to chop them really fine.</br>\
                  - Cook the onions for around 4 minutes until golden brown in color. Add the finely chopped ginger, garlic and green chili. Again, I used my food processor to chop them really fine.</br>\
                  - Add chopped tomatoes and mix well. Let the tomatoes cook for 2 minutes.</br>\
                  - Add tomato puree, 1/4 cup water and 1/4 teaspoon salt. Cover the pan and let the tomato cook for 6 minutes until softened and completely cooked.</br>\
                  - Add the pav bhaji masala, red chili powder and remaining 1 teaspoon of salt. You may also add 1/2 teaspoon of sugar here (optional).</br>\
                  - Mix well and then add in 2 teaspoons of kasuri methi (dried fenugreek leaves).</br>\
                  - Stir in the boiled veggies and mix.</br>\
                  - Using a potato masher, mash the veggies until they are completely mixed with the masala.</br>\
                  - Add the remaining 3/4 – 1 cup water and mix. I used an immersion blender to blend the veggies to a paste like consistency, this is optional. You may keep them as such.</br>\
                  - Cover the pot and set heat to low. Let the bhaji simmer on low heat for 15 minutes.</br>\
                  - Open the pot and add in the remaining 2 tablespoons of butter.</br>\
                  - Add a generous amount of chopped cilantro.</br>\
                  - Then add in juice of 1 large lemon. Let the bhaji simmer for 2 more minutes and then remove pan from heat.</br>\
                  - To toast the pav, melt butter on a pan. Sprinkle some pav bhaji masala on top of the butter and then place the buns on the pan.</br>\
                  - Press to toast the pav until crisp and golden brown from both sides.</br>";

  ingredients[7]="<table style=\"width:100%\"> <caption style=\"font: 1rem 'Noto Sans', sans-serif;\">INGREDIENTS</caption>\
                    <tr><td style='visibility:hidden;'>g</td><td></td><td></td></tr>\
                  <tr><td style='visibility:hidden;'>Assembling Vada Pav:</td><td>2 Tbsp </td><td>Oil</td></tr>\
                  <tr><td></td><td>1 Medium </td><td>Onion diced</td></tr>\
                  <tr><td></td><td>1 Tsp </td><td>Ginger finely minced or grated (or use paste)</td></tr>\
                  <tr><td></td><td>2-3 </td><td>Garlic finely minced or crushed</td></tr>\
                  <tr><td></td><td>1 ½ Pounds</td><td> Boneless, skinless chicken breasts, cut into ¾-inch chunks</td></tr>\
                  <tr><td></td><td>1 Can 6 oz.</td><td> Tomato Paste </td></tr>\
                  <tr><td></td><td>1 Tbsp</td><td> Garam Masala</td></tr>\
                  <tr><td></td><td>1 Tsp </td><td>Chili Powder or Paprika</td></tr>\
                  <tr><td></td><td>1 Tsp</td><td> Fenugreek </td></tr>\
                  <tr><td></td><td>1 Tsp </td><td>Cumin</td></tr>\
                  <tr><td></td><td>1 Tsp</td><td> Salt</td></tr>\
                  <tr><td></td><td>1/4 Tsp</td><td> Black Pepper</td></tr>\
                  <tr><td></td><td>1 Cup</td><td> Heavy cream sub for half & half or yogurt for low fat</td></tr>\
                  <tr><td></td><td></td><td> Hot cooked rice and naan for serving</td></tr></table></br></br>\
                  <center><strong style=\"font: 1rem 'Noto Sans', sans-serif;\">PREPARATION</strong></center></br>\
                  - Heat a large skillet or medium saucepan over medium-high heat. Add the oil and onions and cook onions down until lightly golden, about 3-4 minutes. Add ginger and garlic and let cook for 30 seconds, stirring so it doesn’t burn.</br>\
                  - Add the chicken, tomato paste, and spices. Cook for 5-6 minutes or until everything is cooked through.</br>\
                  - Add the heavy cream and simmer for 8-10 minutes stirring occasionally. Serve over Basmati rice or with naan.</br>";


  ingrediv.innerHTML = ingredients[key-1];
  ingrediv.style.fontSize="0.8rem";
  ingrediv.style.fontFamily="Noto Sans, sans-serif";

}
function Print()
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
		mywindow.document.write( '<link rel="stylesheet" href="style.css" type="text/css" media=\"print\"/>' );
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById('cooktime').innerHTML);
    mywindow.document.write(document.getElementById('changemyrecipe').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}
