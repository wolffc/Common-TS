# Copy the Full featured UL Menu
10 < lib.commonTS.menu.ul
10 {
	# Open all Submenus
	1.expAll = 1
	# Creating the Sublevels by copy of the level 1 definition
	2 < .1
	3 < .1
	4 < .1
	5 < .1
	# wrap the Whole Menu in an extra Div with the id "mainmenu"
	wrap = <div id="mainmenu"><ul>|</ul></div>
}
