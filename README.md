Common TS Readme
================

# What is it 
Common TS is a Pure Typoscript Extension trying to Speed up Your Typo3 Development Dramaticaly
* by giving you a Sane Set of Default Configuration for CONFIG and PAGE object.
* using some automatic Template file Detection to automaticaly include some files like favicon or print.css
* Giving you Copy templates for Commonly Used Typoscript Objects Like Menus.
* all in an easy CSS styleable way by the use classes and ID's, prefixed with CTS- to avoid conflicts
* support for Diffrent Templating Aproaches Classic / Templavoila / MondernBE Grid Layouts
* Search Engine Friendly HTML
* support for XHTML / and HTML5
* Easy and fast to use. install, include static template, go!

How To Use 
----------
* Install the extension via Extension manager
* Include the static Extension template "Common TS Base" directly after css_styled_content (important!)
* check out the Constants Editor for COMMON TS configuration Options

why should the commonTS Static Template be included directly after css_styled_content
for convinicen Common_TS strips the HTML Content Element of the div-wrap around it (Configuration Option). 
therefore it needes to be loaded after css_styled content. also Common TS pedefines a Global config and page object (also configurationable)
but some extension write directly to the "page" object and if the commonTS.page object would be loaded after such an 3rd Party extension the other extensions Data would be lost. such errors are hard to find therefore keep it right after css_styled_content and don't worry :)

example Typoscript
------------------
there is now a "Common TS Demo Page" Static Template wich generates a Demo Page you could use in your installation to Get to know this extension more. and see some of its outputs.

### ul/li Menu 3 Layers Deep

This Example shows you how to get an 3 Level ul/li menu with full classes for every itemstate first and last item.
so the menu is easily stylable with css. also the menu gives you some search engine friendly options

    # page object is definied via commonTS and ready to use
    page.10 =TEMPLATE
    page.10 {
      template = FILE
      tempalte.file = fileadmin/template/template.html
      # Copy the Common TS Template for a Fullfledged menu
      marks.MAINMENU < lib.commonTS.menu.ul
      marks.MAINMENU {
        # Creating menu level 2+3
        2 < .1
        3 < .1
        # give the first layer of the Menu an ID otherwise it would be a plain <ul>|</ul>
        1.wrap = <ul id="main-menu">|</ul>
      }
    }

### Changing an an element-style based on a Page id
    .my-element {background:yellow} 
    #cts-page-16 .my-element {background:red}

Configuration Option (Constants Editor)
=======================================
In The constants Editor you find Many Options which help you to Configure Most important options in an Easy way

*** To Be Written ***
CommonTS Structur

all common TS Objects are defined in a namespace consisting of 3 parts
prefix.section.objectdefinition

the prefix is always lib.commonTS 
and is manly there for conflict avoidance

the section indicates a scope of object found in this sup tree.
like menu. contains all menu Templates
there are currently 2 Exceptions to this rule (config and page)

the objectdefinition is the Copy template for the Object.

Automagic FileLoding
--------------------
CommonTS Predifines some files Which will be loaded if present for speedly development:
imagefiles:
images/favicon*
- if found the favicon/shortcuticon for the site is set automaticaly

the following CSS files will be loaded:
  css/reset.css  
  - if you use an CSS reset file

  css/rte.css  
  - ths should be your Rich Text editor Stylesheed so all Classes Defined there are automaticly present in Frontend as welll
  css/layout.css
  - the main Layout of your site
  css/print.css
  - the print layout of your site of course with media="print" set.

Shothandle Constants
--------------------

there are some short handle constants you can use in in your Templates for easy access to most common path
these are configurable via the extension manager

    # Path to the Template Directory
    cts.tpl = fileadmin/template/
    # Path to the Javascript Directory
    cts.js = fileadmin/template/javascript/
    # Path to the CSS Directory
    cts.css = fileadmin/template/css/
    # Path to the Images Directory
    cts.img = fileadmin/template/images/

example usage in your Typoscript Template could be the following

    page.includeCSS.10 = {$cts.css}myCustom.css
    page.includeJS.10 = {$cts.js}extrafunction.js

if you use these Shorthand variables throughout your templates you could easly switch to a new template 
just by changing the constants path. this gets very usfull if your site gets contouinuly developed

Templates Explained
===================

Get a look for your self 
------------------------
i recommend to take a look at the CommonTS code with the Template analyser and Typoscript Explorere
for your better understanding of the workings of this libary

config 
------
*** To Be Written ***

page 
----
*** To Be Written ***

menu.ul 
-------
*** To Be Written ***

menu.ulSimple
-------------
*** To Be Written ***

menu.ulMinimal
-------------- 
*** To Be Written ***




Possibble Extensions
====================
These Options are currently in Disccution for inclusion
  * Print Page Setup
  * ulPlain // Stripped of any Classes
  * Cleaner Setup Structure by moving config and page objects 
  * additonal Bodyclasses (for easy branch Seperation Based on Constants)

Known Problems
==============
currently no Problems are known