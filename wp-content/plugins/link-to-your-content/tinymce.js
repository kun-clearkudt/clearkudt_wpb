function init() {
	tinyMCEPopup.resizeToInnerSize();
}

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function insertDocumentLink(sel) {
	var tagtext; var tagtarget;
	var posts_panel = document.getElementById('posts_panel');
	var pages_panel = document.getElementById('pages_panel');
	var docs_panel = document.getElementById('docs_panel');
	var images_panel = document.getElementById('images_panel');
	var cptypes_panel = document.getElementById('cptypes_panel');
	var taxonomies_panel = document.getElementById('taxonomies_panel');
	var external_panel = document.getElementById('external_panel');

	// who is active ?
	if(posts_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('posts_linkTitle').value;
		var linkTarget = document.getElementById('posts_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}

	if(pages_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('pages_linkTitle').value;
		var linkTarget = document.getElementById('pages_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}
	
	if(docs_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('docs_linkTitle').value;
		var linkTarget = document.getElementById('docs_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}

	if(images_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('images_linkTitle').value;
		var linkTarget = document.getElementById('images_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}

	if(cptypes_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('cptypes_linkTitle').value;
		var linkTarget = document.getElementById('cptypes_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext += linkTitle; }
			else { tagtext += sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}

	if(taxonomies_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('linkHref').value;
		var linkDefaultTitle = document.getElementById('linkDefaultTitle').value;
		var linkTitle = document.getElementById('taxonomies_linkTitle').value;
		var linkTarget = document.getElementById('taxonomies_linkTarget').value;
		if(linkHref != 0) {
			//tagtext = '<a href="'+linkHref+'" target="'+linkTarget+'" title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
			tagtarget = linkTarget;
		}
		else
			tinyMCEPopup.close();
	}

	if(external_panel.className.indexOf('current') != -1) {
		var linkHref = document.getElementById('externalLink').value;
		var linkTitle = document.getElementById('external_linkTitle').value;
		var linkTarget = document.getElementById('external_linkTarget').value;
		var linkType = getCheckedValue(document.LinkToYourContent.externalLinkType);
		if(linkHref != 0 && linkHref != 'http://' && linkHref != 'mailto:') {
			//tagtext = '<a href="'+linkHref+'"';
			if(linkType == 'http') { tagtarget = linkTarget; }
			//tagtext += ' title="';
			if(linkTitle != '' && linkTitle.length > 0) { tagtext = linkTitle; }
			else { tagtext = sel; }
			//tagtext += '">'+sel+'</a>';
		}
		else
			tinyMCEPopup.close();
	}
	
	if(window.tinyMCE) {
		//TODO: For QTranslate we should use here 'qtrans_textarea_content' instead 'content'
		//window.tinyMCE.execInstanceCommand('content', 'mceReplaceContent', false, tagtext);
		if(typeof tagtarget != 'undefined' && tagtarget.length > 0) {
			window.tinyMCE.execCommand('mceInsertLink', false, {href: linkHref, title: tagtext, target: tagtarget});
		}
		else {
			window.tinyMCE.execCommand('mceInsertLink', false, {href: linkHref, title: tagtext});
		}
		//Peforms a clean up of the current editor HTML. 
		//tinyMCEPopup.editor.execCommand('mceCleanup');
		//Repaints the editor. Sometimes the browser has graphic glitches. 
		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.close();
	}
	return;
}
