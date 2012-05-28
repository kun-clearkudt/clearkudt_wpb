function getQueryVariable(query, variable) {
	if (query.indexOf('?') != -1) { var query = query.substring(query.indexOf('?') + 1, query.length); }
	if (query.indexOf('#') != -1) { var query = query.substring(0, query.indexOf('#')); }
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return false;
}

var sel = tinyMCEPopup.getWindowArg('sel');
if(sel == '') { tinyMCEPopup.close(); }
jQuery.noConflict();
jQuery(document).ready(function($) {
	// Set up the table striping for each of the panels
	$("#docs_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	$("#images_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	$("#posts_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	$("#pages_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	$("#cptypes_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	$("#taxonomies_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
	// When the Select button is clicked
	$("a.selectDocument").live('click', function() {
		$("input#linkHref").val($(this).attr("href"));
		$("input#linkDefaultTitle").val($(this).attr("title"));
		$("tr.selectedDocument").removeClass("selectedDocument");
		$(this).parent("td").parent("tr").addClass("selectedDocument");
		return false;
	});
	// Fires when the external link radio buttons are clicked
	$("input[name='externalLinkType']").live('change', function() {
		if($(this).val() == 'http') { $('input#externalLink').val('http://'); }
		else if($(this).val() == 'mailto') { $('input#externalLink').val('mailto:'); }
		else { $('input#externalLink').val('http://'); }
	});
	// Site toggle drop down functionality
	$('#siteToggle').change(function() {
		//window.location = $('#siteToggle > option:selected').val();
		$.ajax({
			type: "post",
			url: ajaxURL,
			dataType: "json",
			data: {
				action: 'ltyc_site_switch',
				_ajax_nonce: siteToggleNonce,
				ajax_site: $('#siteToggle > option:selected').val()
			},
			beforeSend: function() {
				$('div#loadingGraphic').show();						
			},
			success: function(data) {
				if(data.error == '1') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to a site that doesn&rsquo;t exist. Please select a valid site from the dropdown above.</p>');
				} else if(data.error == '2') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that we were unable to switch you to the site you requested. Please select another site from the dropdown above.</p>');
				} else {
					$('div#posts_panel').html(data.posts_panel);
					$('div#pages_panel').html(data.pages_panel);
					$('div#cptypes_panel').html(data.cptypes_panel);
					$('div#taxonomies_panel').html(data.taxonomies_panel);
					$('div#docs_panel').html(data.docs_panel);
					$('div#images_panel').html(data.images_panel);
					$('div.tabs').html(data.content_tabs);
					javascript:mcTabs.displayTab('posts_tab','posts_panel');
					$("#posts_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
					$("#pages_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
					$("#cptypes_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
					$("#taxonomies_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
					$("#docs_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
					$("#images_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
				}
				$('div#loadingGraphic').hide();
			},		
			error: function() {
				$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that we were unable to complete your request. Please try again.</p>');
				$('div#loadingGraphic').hide();
			}
		});
		return false;
	});
	// Pagination link functionality
	$('p.pagination > a').live('click', function() {
		var ajax_type = getQueryVariable($(this).attr('href'), 'type');
		var ajax_page = getQueryVariable($(this).attr('href'), 'page');
		var ajax_site = getQueryVariable($(this).attr('href'), 'site');
		var ajax_cpt = getQueryVariable($(this).attr('href'), 'cpt');
		var ajax_tax = getQueryVariable($(this).attr('href'), 'tax');

		$.ajax({
			type: "post",
			url: ajaxURL,
			dataType: "json",
			data: {
				action: 'ltyc_page_switch',
				_ajax_nonce: paginationNonce,
				ajax_type: ajax_type,
				ajax_page: ajax_page,
				ajax_site: ajax_site,
				ajax_cpt: ajax_cpt,
				ajax_tax: ajax_tax
			},
			beforeSend: function() {
				$('div#loadingGraphic').show();
			},
			success: function(data) {
				if(data.error == '1') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to page that doesn&rsquo;t exist. Please try again.</p>');
				} else {
					switch(data.ajax_type) {
						case 'posts' :
							$('div#posts_panel').html(data.posts_panel);
							$("#posts_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						case 'pages' :
							$('div#pages_panel').html(data.pages_panel);
							$("#pages_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						case 'cptypes' :
							$('div#cptypes_panel').html(data.cptypes_panel);
							$("#cptypes_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						case 'taxonomies' :
							$('div#taxonomies_panel').html(data.taxonomies_panel);
							$("#taxonomies_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						case 'docs' :
							$('div#docs_panel').html(data.docs_panel);
							$("#docs_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						case 'images' :
							$('div#images_panel').html(data.images_panel);
							$("#images_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;
						default : 
							$('div#posts_panel').html(data.posts_panel);
							$("#posts_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
							break;				
					}
				}
				$('div#loadingGraphic').hide();
			},		
			error: function() {
				$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that we were unable to complete your request. Please try again.</p>');
				$('div#loadingGraphic').hide();
			}
		});
		return false;
	});
	// Custom post type drop down
	$('#cptToggle').live('change', function() {
		$.ajax({
			type: "post",
			url: ajaxURL,
			dataType: "json",
			data: {
				action: 'ltyc_panel_switch',
				_ajax_nonce: cptToggleNonce,
				ajax_cpt: $('#cptToggle > option:selected').val(),
				ajax_type: 'cptypes'
			},
			beforeSend: function() {
				$('div#loadingGraphic').show();
			},
			success: function(data) {
				if(data.error == '1') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to a custom post type that doesn&rsquo;t exist. Please try again.</p>');
				} else if(data.error == '2') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to a panel that doesn&rsquo;t exist. Please try again.</p>');
				} else {
					$('div#cptypes_panel').html(data.cptypes_panel);
					$("#cptypes_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
				}
				$('div#loadingGraphic').hide();
			},		
			error: function() {
				$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that we were unable to complete your request. Please try again.</p>');
				$('div#loadingGraphic').hide();
			}
		});
		return false;
	});
	// Taxonomy drop down
	$('#taxToggle').live('change', function() {
		$.ajax({
			type: "post",
			url: ajaxURL,
			dataType: "json",
			data: {
				action: 'ltyc_panel_switch',
				_ajax_nonce: taxToggleNonce,
				ajax_tax: $('#taxToggle > option:selected').val(),
				ajax_type: 'taxonomies'
			},
			beforeSend: function() {
				$('div#loadingGraphic').show();
			},
			success: function(data) {
				if(data.error == '1') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to a taxonomy that doesn&rsquo;t exist. Please try again.</p>');
				} else if(data.error == '2') {
					$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that you are trying to switch to a panel that doesn&rsquo;t exist. Please try again.</p>');
				} else {
					$('div#taxonomies_panel').html(data.taxonomies_panel);
					$("#taxonomies_panel > .documentListWrap > table.striped > tbody > tr:even > td").css("background-color", "#f1f1f1");
				}
				$('div#loadingGraphic').hide();
			},		
			error: function() {
				$('div.panel_wrapper').html('<p class="errorMessage">I&rsquo;m sorry but it seems that we were unable to complete your request. Please try again.</p>');
				$('div#loadingGraphic').hide();
			}
		});
		return false;
	});
});