function hashmapcooktime(key){
	var hashmap={};
	hashmap[0]="Recipe Servings:&nbsp;<em> 2</em> | Prep Time:&nbsp;<em> 20 mins</em> | Cook Time:&nbsp;<em> 20 mins </em>| Total Cook Time:&nbsp; <em>40 mins</em> | Difficulty Level: &nbsp;<em>Medium</em> | &nbsp;&nbsp;&nbsp;<button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[1]="Recipe Servings:&nbsp;<em> 4</em> | Prep Time:&nbsp;<em> 20 mins </em>| Cook Time:&nbsp; <em>10 mins</em> | Total Cook Time:&nbsp; <em>30 mins</em> | Difficulty Level: &nbsp;<em>Easy</em> | &nbsp; &nbsp;&nbsp;<button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[2]="Recipe Servings:&nbsp; <em>6 </em>| Prep Time:&nbsp;<em> 5 mins </em>| Cook Time:&nbsp; <em>30 mins </em>| Total Cook Time:&nbsp; <em>35 mins </em>| Difficulty Level:&nbsp;<em> Medium </em>| &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[3]="Recipe Servings:&nbsp; <em>8 </em>| Prep Time:&nbsp;<em> 40 mins </em>| Cook Time:&nbsp;<em> 20 mins </em>| Total Cook Time: &nbsp;<em>60 mins</em> | Difficulty Level: &nbsp;<em>Medium </em>| &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[4]="Recipe Servings:&nbsp;<em> 4 </em>| Prep Time:&nbsp;<em> 5 mins </em>| Cook Time:&nbsp; <em>20 mins </em>| Total Cook Time: &nbsp;<em>25 mins </em>| Difficulty Level:&nbsp; <em>Easy</em> | &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[5]="Recipe Servings:&nbsp;<em> 2 </em>| Prep Time:&nbsp;<em> 480 mins </em>| Cook Time:&nbsp; <em>30 mins</em> | Total Cook Time:&nbsp;<em> 510 mins</em> | Difficulty Level:&nbsp; <em>Medium </em>| &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[6]="Recipe Servings:&nbsp; <em>2 </em>| Prep Time:&nbsp; <em>10 mins</em> | Cook Time:&nbsp; <em>30 mins </em>| Total Cook Time:&nbsp; <em>40 mins</em> | Difficulty Level:&nbsp;<em> Medium</em> | &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	hashmap[7]="Recipe Servings:&nbsp; <em>4 </em>| Prep Time:&nbsp;<em>5 mins</em> | Cook Time:&nbsp; <em>15 mins </em>| Total Cook Time: &nbsp;<em>20 mins</em> | Difficulty Level:&nbsp; <em>Easy</em> | &nbsp;&nbsp;&nbsp; <button type=\"button\" onclick=\"Print()\">Print Recipe</button>";
	var modal2text =document.getElementById('cooktime');
	modal2text.innerHTML = hashmap[key-1];
	modal2text.style.fontWeight="400";
	images(key);
	realimages(key);
}
function images(key){
	var image={};
	image[0]="<img src=\"Illustrations8.png\" width=\"130\" height=\"130\">"
	image[1]="<img src=\"Illustrations4.png\" width=\"130\" height=\"130\">"
	image[2]="<img src=\"Illustrations1.png\" width=\"130\" height=\"130\">"
	image[3]="<img src=\"Illustrations3.png\" width=\"130\" height=\"130\">"
	image[4]="<img src=\"Illustrations7.png\" width=\"130\" height=\"130\">"
	image[5]="<img src=\"Illustrations6.png\" width=\"130\" height=\"130\">"
	image[6]="<img src=\"Illustrations5.png\" width=\"130\" height=\"130\">"
	image[7]="<img src=\"Illustrations2.png\" width=\"130\" height=\"130\">"

	var modalimage =document.getElementById('actualpics');
	modalimage.innerHTML = image[key-1];
}
function realimages(key)
{
	var images={};
	images[0]="<img src=\"vadapao.jpeg\" width=\"250\" height=\"250\">"
	images[1]="<img src=\"papdichat.jpg\" width=\"250\" height=\"250\">"
	images[2]="<img src=\"panipuri.jpg\" width=\"250\" height=\"250\">"
	images[3]="<img src=\"parantha.jpg\" width=\"250\" height=\"250\">"
	images[4]="<img src=\"bhel.jpg\" width=\"250\" height=\"250\">"
	images[5]="<img src=\"cholekulche.jpg\" width=\"250\" height=\"250\">"
	images[6]="<img src=\"pavbhaji.jpg\" width=\"250\" height=\"250\">"
	images[7]="<img src=\"Butter-Chicken.jpg\" width=\"250\" height=\"250\">"
	var prep = document.getElementById('justdrawingdiv');
	prep.innerHTML = images[key-1];
}
