<?php require_once('ltyc_config.php'); ?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Link to Your Content</title>
		<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php echo get_option('blog_charset'); ?>" />
		<script language="javascript" type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
		<script language="javascript" type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/utils/mctabs.js"></script>
		<script language="javascript" type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/utils/form_utils.js"></script>
		<script language="javascript" type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/jquery/jquery.js"></script>
		<script language="javascript" type="text/javascript" src="<?php echo LTYCDLPLUGINPATH; ?>/tinymce.js"></script>
		<script language="javascript" type="text/javascript">
		<!--
			var ajaxURL = "<?php echo get_option('siteurl') ?>/wp-admin/admin-ajax.php";
			var siteToggleNonce = "<?php echo wp_create_nonce('ltyc_change_active_network_site'); ?>";
			var paginationNonce = "<?php echo wp_create_nonce('ltyc_change_active_type_page'); ?>";
			var cptToggleNonce = "<?php echo wp_create_nonce('ltyc_change_active_site_panel'); ?>";
			var taxToggleNonce = "<?php echo wp_create_nonce('ltyc_change_active_site_panel'); ?>";
		-->
		</script>
		<script language="javascript" type="text/javascript" src="<?php echo LTYCDLPLUGINPATH; ?>/js/navigation.js"></script>
		<base target="_self" />
		<link rel="stylesheet" type="text/css" href="<?php echo LTYCDLPLUGINPATH; ?>/css/ltyc.css" />	
		<base target="_self" />
	</head>
	<body id="link" onLoad="tinyMCEPopup.executeOnLoad('init();');document.body.style.display='';" style="display: none">
		<form name="LinkToYourContent" action="#">
			<?php echo $linkTYC->ltyc_site_toggle(); ?>
			<div class="tabs">
				<?php echo $linkTYC->ltyc_content_tabs(); ?>
			</div>
			<div class="panel_wrapper">
				<!-- posts panel -->
				<div id="posts_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'posts') { echo ' current'; } else if(!isset($_GET['type'])) { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('posts'); ?>
				</div>
				<!-- pages panel -->
				<div id="pages_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'pages') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('pages'); ?>
				</div>
				<!-- custom post type panel -->
				<div id="cptypes_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'cptypes') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('cptypes'); ?>
				</div>
				<!-- taxonomy panel -->
				<div id="taxonomies_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'taxonomies') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('taxonomies'); ?>
				</div>
				<!-- document panel -->
				<div id="docs_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'docs') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('docs'); ?>
				</div>
				<!-- images panel -->
				<div id="images_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'images') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('images'); ?>
				</div>
				<!-- external panel -->
				<div id="external_panel" class="panel<?php if(isset($_GET['type']) && $_GET['type'] == 'external') { echo ' current'; } ?>">
					<?php echo $linkTYC->ltyc_panel_display('external'); ?>
				</div>
			</div>
			<div class="mceActionPanel">
				<div style="float: left">
					<input type="button" id="cancel" name="cancel" value="Cancel" onClick="tinyMCEPopup.close();" />
				</div>
		
				<div style="float: right">
					<input type="hidden" name="linkHref" id="linkHref" value="" /><input type="hidden" name="linkDefaultTitle" id="linkDefaultTitle" value="" />
					<input type="submit" id="insert" name="insert" value="Insert" onClick="insertDocumentLink(sel);" />
				</div>
			</div>
			<div id="loadingGraphic" style="display: none;">
				<img src="<?php echo LTYCDLPLUGINPATH.'/imgs/ajax-loader.gif'; ?>" alt="Loading..." />
			</div>
		</form>
	</body>
</html>
