<?php 
	if (!defined ('TYPO3_MODE')) 	die ('Access denied.');
	
	t3lib_extMgm::addStaticFile($_EXTKEY, 'static/base', 'Common TS');
	t3lib_extMgm::addStaticFile($_EXTKEY, 'static/demo', 'Common TS Demo Page');
?>