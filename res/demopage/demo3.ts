# Copy the Minimal UL Menu just NO states
10 < lib.commonTS.menu.ulMinimal
10 {
	# Open all Submenus
	1.expAll = 1
	# Create 2 Menus Levels by Coping the Level 1 Devintion
	2 < .1
	# Wrap the Menu in a html5 navigation tag
	1.wrap = <navigation><ul>|</ul></navigation>
}