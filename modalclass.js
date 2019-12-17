										// Get the modal
										function clicky(key) {
												hashmap(key);
												var modal2 = document.getElementById('clickmodal');
												modal2.style.display = "block";
										}
										function closeit() {
											document.getElementById('clickmodal').style.display = "none";
										}
										window.onclick = function(event) {
												if (event.target == modal2) {
													document.getElementById('clickmodal').style.display = "none";
												}
										}
