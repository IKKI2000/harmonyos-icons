/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'harmonyos\'">' + entity + '</span>' + html;
	}
	var icons = {
		'hm-arrow-up': '&#xe900;',
		'hm-arrow-down': '&#xe901;',
		'hm-arrow-left': '&#xe902;',
		'hm-arrow-left-filled': '&#xe903;',
		'hm-arrow-right': '&#xe904;',
		'hm-arrow-right-filled': '&#xe905;',
		'hm-sort-ascending': '&#xe906;',
		'hm-sort-descending': '&#xe907;',
		'hm-back': '&#xe908;',
		'hm-back-to-top': '&#xe909;',
		'hm-upload': '&#xe90a;',
		'hm-upload-filled': '&#xe90b;',
		'hm-download': '&#xe90c;',
		'hm-download-filled': '&#xe90d;',
		'hm-cloud-upload': '&#xe90e;',
		'hm-cloud-download': '&#xe90f;',
		'hm-grow': '&#xe910;',
		'hm-shrink': '&#xe911;',
		'hm-topping': '&#xe912;',
		'hm-topping-filled': '&#xe913;',
		'hm-upgrade': '&#xe914;',
		'hm-upgrade-filled': '&#xe915;',
		'hm-send': '&#xe916;',
		'hm-send-filled': '&#xe917;',
		'hm-refresh': '&#xe918;',
		'hm-reset': '&#xe919;',
		'hm-spinner': '&#xe91a;',
		'hm-spinner-small': '&#xe91b;',
		'hm-merge': '&#xe91c;',
		'hm-sync': '&#xe91d;',
		'hm-quick-reply': '&#xe91f;',
		'hm-forwarding': '&#xe920;',
		'hm-set': '&#xe921;',
		'hm-quit': '&#xe922;',
		'hm-phone': '&#xe923;',
		'hm-phone-filled': '&#xe924;',
		'hm-call-vo-lte': '&#xe925;',
		'hm-call-volte': '&#xe926;',
		'hm-call-vo4g': '&#xe927;',
		'hm-call-hd': '&#xe928;',
		'hm-call-wifi': '&#xe929;',
		'hm-call-r': '&#xe92a;',
		'hm-dial-volte': '&#xe92b;',
		'hm-dial-voz4g': '&#xe92c;',
		'hm-dial-wifi': '&#xe92d;',
		'hm-call-dial-wifi': '&#xe92e;',
		'hm-call-log-volte': '&#xe92f;',
		'hm-call-log-voz4g': '&#xe930;',
		'hm-call-log-vowifi': '&#xe931;',
		'hm-call-log-wifi': '&#xe932;',
		'hm-call-log-double-line-volte': '&#xe933;',
		'hm-call-log-double-line-voz4g': '&#xe934;',
		'hm-call-log-double-line-vowifi': '&#xe935;',
		'hm-call-log-double-line-vozwifi': '&#xe936;',
		'hm-hi-call': '&#xe937;',
		'hm-hi-call-filled': '&#xe938;',
		'hm-records-sim-call': '&#xe939;',
		'hm-sys-sim-1-call': '&#xe93a;',
		'hm-sys-sim-2-call': '&#xe93b;',
		'hm-sim-card': '&#xe93c;',
		'hm-call-1': '&#xe940;',
		'hm-call-1-filled': '&#xe941;',
		'hm-call-2': '&#xe942;',
		'hm-call-2-filled': '&#xe943;',
		'hm-encryption-calls': '&#xe944;',
		'hm-encryption-calls-filled': '&#xe945;',
		'hm-call-encryption-calls': '&#xe946;',
		'hm-call-encryption-calls-filled': '&#xe947;',
		'hm-call-1-encryption-calls': '&#xe948;',
		'hm-call-2-encryption-calls': '&#xe949;',
		'hm-call-1-volte': '&#xe94a;',
		'hm-call-2-volte': '&#xe94b;',
		'hm-call-1-voz4g': '&#xe94c;',
		'hm-call-2-voz4g': '&#xe94d;',
		'hm-call-1-vowifi': '&#xe94e;',
		'hm-call-2-vowifi': '&#xe94f;',
		'hm-call-1-hd': '&#xe950;',
		'hm-call-2-hd': '&#xe951;',
		'hm-call-1-wifi': '&#xe952;',
		'hm-call-2-wifi': '&#xe953;',
		'hm-phone-dial': '&#xe954;',
		'hm-phone-dial-delete': '&#xe955;',
		'hm-incoming-filled': '&#xe956;',
		'hm-missed-filled': '&#xe957;',
		'hm-refuse-filled': '&#xe958;',
		'hm-outgoing-filled': '&#xe959;',
		'hm-video-call-incoming': '&#xe95a;',
		'hm-video-call-missed': '&#xe95b;',
		'hm-video-call-refuse': '&#xe95c;',
		'hm-video-call-outgoing': '&#xe95d;',
		'hm-rcs-incoming': '&#xe95e;',
		'hm-rcs-missed': '&#xe95f;',
		'hm-rcs-refuse': '&#xe960;',
		'hm-rcs-outgoing': '&#xe961;',
		'hm-rcs-list-asc': '&#xe962;',
		'hm-rcs-list-desc': '&#xe963;',
		'hm-personal-emergency-information': '&#xe964;',
		'hm-voicemail-voice-to-text': '&#xe965;',
		'hm-voicemail-voice-to-message': '&#xe966;',
		'hm-voicemail': '&#xe967;',
		'hm-voice-message-details': '&#xe968;',
		'hm-voice-message-details-filled': '&#xe969;',
		'hm-message': '&#xe96a;',
		'hm-message-filled': '&#xe96b;',
		'hm-community-messages': '&#xe96c;',
		'hm-community-messages-filled': '&#xe96d;',
		'hm-subject': '&#xe96e;',
		'hm-comments': '&#xe96f;',
		'hm-comments-filled': '&#xe970;',
		'hm-read': '&#xe971;',
		'hm-connection': '&#xe973;',
		'hm-connection-filled': '&#xe974;',
		'hm-mobile-data': '&#xe975;',
		'hm-mobile-data-filled': '&#xe976;',
		'hm-wlan': '&#xe977;',
		'hm-wlan-filled': '&#xe978;',
		'hm-bluetooth-on': '&#xe979;',
		'hm-bluetooth-on-filled': '&#xe97a;',
		'hm-bluetooth-off': '&#xe97b;',
		'hm-bluetooth-off-filled': '&#xe97c;',
		'hm-wireless-projection': '&#xe97d;',
		'hm-wireless-projection-filled': '&#xe97e;',
		'hm-hd': '&#xe97f;',
		'hm-g': '&#xe980;',
		'hm-signal-4g': '&#xe981;',
		'hm-signal-5g': '&#xe982;',
		'hm-wifi': '&#xe983;',
		'hm-wifi6': '&#xe984;',
		'hm-wifi6-plus': '&#xe985;',
		'hm-wifi-error': '&#xe986;',
		'hm-wifi6-error': '&#xe987;',
		'hm-wifi6-plus-error': '&#xe988;',
		'hm-wifi-lock': '&#xe989;',
		'hm-wifi6-lock': '&#xe98a;',
		'hm-wifi6-plus-lock': '&#xe98b;',
		'hm-wifi-prohibit': '&#xe98c;',
		'hm-wifi6-prohibit': '&#xe98d;',
		'hm-wifi6-plus-prohibit': '&#xe98e;',
		'hm-wifi-risk': '&#xe98f;',
		'hm-wifi6-risk': '&#xe990;',
		'hm-wifi6-plus-risk': '&#xe991;',
		'hm-wifi-hotspot': '&#xe992;',
		'hm-hotspot': '&#xe993;',
		'hm-bluetooth': '&#xe994;',
		'hm-bluetooth-connect': '&#xe995;',
		'hm-bluetooth-battery': '&#xe996;',
		'hm-headphones-connect': '&#xe998;',
		'hm-bvp-connect': '&#xe999;',
		'hm-bvp-battery': '&#xe99c;',
		'hm-glass-battery': '&#xe99f;',
		'hm-wlan-cast': '&#xe9a0;',
		'hm-location': '&#xe9a1;',
		'hm-nfc': '&#xe9a2;',
		'hm-airplane-mode': '&#xe9a3;',
		'hm-no-sim': '&#xe9a4;',
		'hm-eye-care': '&#xe9a5;',
		'hm-alarm-clock': '&#xe9a6;',
		'hm-vibration': '&#xe9a7;',
		'hm-mute': '&#xe9a8;',
		'hm-no-disturb': '&#xe9a9;',
		'hm-battery': '&#xe9aa;',
		'hm-battery-power-saving': '&#xe9ab;',
		'hm-battery-charging': '&#xe9ad;',
		'hm-battery-quick-charging': '&#xe9b0;',
		'hm-battery-super-charging': '&#xe9b3;',
		'hm-battery-wireless-charging': '&#xe9b6;',
		'hm-battery-wireless-quick-charging': '&#xe9ba;',
		'hm-battery-wireless-super-charging': '&#xe9be;',
		'hm-charging': '&#xe9c2;',
		'hm-quick-charging': '&#xe9c3;',
		'hm-super-charging': '&#xe9c4;',
		'hm-wireless-charging': '&#xe9c5;',
		'hm-wireless-quick-charging': '&#xe9c6;',
		'hm-wireless-super-charging': '&#xe9c7;',
		'hm-reverse-charging': '&#xe9c8;',
		'hm-reboot': '&#xe9c9;',
		'hm-power-off': '&#xe9ca;',
		'hm-mobile-phone': '&#xe9cb;',
		'hm-mobile-phone-filled': '&#xe9cc;',
		'hm-foldable-screen': '&#xe9cd;',
		'hm-foldable-screen-filled': '&#xe9ce;',
		'hm-pad': '&#xe9d1;',
		'hm-pad-filled': '&#xe9d2;',
		'hm-mate-book': '&#xe9d4;',
		'hm-mate-book-filled': '&#xe9d5;',
		'hm-smart-screen': '&#xe9d7;',
		'hm-smart-screen-filled': '&#xe9d8;',
		'hm-watch': '&#xe9da;',
		'hm-watch-filled': '&#xe9db;',
		'hm-watch-fit': '&#xe9dd;',
		'hm-watch-fit-filled': '&#xe9de;',
		'hm-band': '&#xe9e0;',
		'hm-band-filled': '&#xe9e1;',
		'hm-kids-watch': '&#xe9e3;',
		'hm-kids-watch-filled': '&#xe9e4;',
		'hm-earphone-shark': '&#xe9e6;',
		'hm-earphone-shark-filled': '&#xe9e7;',
		'hm-earphone-shark-left': '&#xe9ea;',
		'hm-earphone-shark-left-filled': '&#xe9eb;',
		'hm-earphone-shark-right': '&#xe9ee;',
		'hm-earphone-shark-right-filled': '&#xe9ef;',
		'hm-earphone-h2': '&#xe9f2;',
		'hm-earphone-h2-filled': '&#xe9f3;',
		'hm-earphone-h2-left': '&#xe9f6;',
		'hm-earphone-h2-left-filled': '&#xe9f7;',
		'hm-earphone-h2-right': '&#xe9fa;',
		'hm-earphone-h2-right-filled': '&#xe9fb;',
		'hm-earphone-hero': '&#xe9fe;',
		'hm-earphone-hero-filled': '&#xe9ff;',
		'hm-earphone-hero-left': '&#xea02;',
		'hm-earphone-hero-left-filled': '&#xea03;',
		'hm-earphone-hero-right': '&#xea06;',
		'hm-earphone-hero-right-filled': '&#xea07;',
		'hm-earphone-mermaid': '&#xea0a;',
		'hm-earphone-mermaid-filled': '&#xea0b;',
		'hm-earphone-mermaid-left': '&#xea0e;',
		'hm-earphone-mermaid-left-filled': '&#xea0f;',
		'hm-earphone-mermaid-right': '&#xea12;',
		'hm-earphone-mermaid-right-filled': '&#xea13;',
		'hm-earphone-otter': '&#xea16;',
		'hm-earphone-otter-filled': '&#xea17;',
		'hm-earphone-otter-left': '&#xea1a;',
		'hm-earphone-otter-left-filled': '&#xea1b;',
		'hm-earphone-otter-right': '&#xea1e;',
		'hm-earphone-otter-right-filled': '&#xea1f;',
		'hm-earphone-walrus': '&#xea22;',
		'hm-earphone-walrus-filled': '&#xea23;',
		'hm-earphone-walrus-left': '&#xea26;',
		'hm-earphone-walrus-left-filled': '&#xea27;',
		'hm-earphone-walrus-right': '&#xea2a;',
		'hm-earphone-walrus-right-filled': '&#xea2b;',
		'hm-earphone-nile': '&#xea2e;',
		'hm-earphone-nile-filled': '&#xea2f;',
		'hm-earphone-battery-round': '&#xea31;',
		'hm-earphone-battery-oval': '&#xea32;',
		'hm-earphone-battery-flat': '&#xea33;',
		'hm-earphone-battery-horizontal': '&#xea34;',
		'hm-earphone-battery-vertical': '&#xea35;',
		'hm-earphone-battery-left': '&#xea36;',
		'hm-earphone-battery-right': '&#xea37;',
		'hm-headphone-roc': '&#xea38;',
		'hm-headphone-roc-filled': '&#xea39;',
		'hm-headphone': '&#xea3b;',
		'hm-headphone-filled': '&#xea3c;',
		'hm-headphone-bluetooth': '&#xea3e;',
		'hm-headphone-bluetooth-filled': '&#xea3f;',
		'hm-sound-x': '&#xea41;',
		'hm-sound-x-filled': '&#xea42;',
		'hm-sound-ai': '&#xea45;',
		'hm-sound-ai-filled': '&#xea46;',
		'hm-sound': '&#xea48;',
		'hm-sound-filled': '&#xea49;',
		'hm-sound-cm530': '&#xea4b;',
		'hm-sound-cm530-filled': '&#xea4c;',
		'hm-sound-cm510': '&#xea4f;',
		'hm-sound-cm510-filled': '&#xea50;',
		'hm-skylark': '&#xea53;',
		'hm-skylark-filled': '&#xea54;',
		'hm-skylark-group': '&#xea56;',
		'hm-skylark-group-filled': '&#xea57;',
		'hm-egretta': '&#xea59;',
		'hm-egretta-filled': '&#xea5a;',
		'hm-egretta-group': '&#xea5c;',
		'hm-egretta-group-filled': '&#xea5d;',
		'hm-glass': '&#xea5f;',
		'hm-glass-filled': '&#xea60;',
		'hm-vrglass': '&#xea63;',
		'hm-vrglass-filled': '&#xea64;',
		'hm-input-keyboard': '&#xea68;',
		'hm-input-voice': '&#xea69;',
		'hm-input-search': '&#xea6a;',
		'hm-input-scan': '&#xea6b;',
		'hm-input-code': '&#xea6c;',
		'hm-text': '&#xea6d;',
		'hm-text-filled': '&#xea6e;',
		'hm-search': '&#xea6f;',
		'hm-search-filled': '&#xea70;',
		'hm-scan': '&#xea71;',
		'hm-scan-filled': '&#xea72;',
		'hm-translate-c2e': '&#xea73;',
		'hm-translate-e2c': '&#xea74;',
		'hm-search-title': '&#xea75;',
		'hm-search-text': '&#xea76;',
		'hm-search-things': '&#xea77;',
		'hm-switch-audio': '&#xea78;',
		'hm-switch-camera': '&#xea79;',
		'hm-new': '&#xea7a;',
		'hm-new-filled': '&#xea7b;',
		'hm-confirm': '&#xea7c;',
		'hm-confirm-filled': '&#xea7d;',
		'hm-cancel': '&#xea7e;',
		'hm-cancel-filled': '&#xea7f;',
		'hm-add': '&#xea80;',
		'hm-add-filled': '&#xea81;',
		'hm-remove': '&#xea82;',
		'hm-remove-filled': '&#xea83;',
		'hm-ok': '&#xea84;',
		'hm-ok-filled': '&#xea85;',
		'hm-close': '&#xea86;',
		'hm-close-filled': '&#xea87;',
		'hm-list-add-transparent': '&#xea88;',
		'hm-list-add': '&#xea8a;',
		'hm-list-remove': '&#xea8c;',
		'hm-list-delete': '&#xea8e;',
		'hm-folder': '&#xea90;',
		'hm-folder_filled': '&#xea91;',
		'hm-new-folder': '&#xea92;',
		'hm-view-grid': '&#xea93;',
		'hm-view-list': '&#xea94;',
		'hm-view-list-filled': '&#xea95;',
		'hm-list-name': '&#xea96;',
		'hm-rename': '&#xea97;',
		'hm-select': '&#xea98;',
		'hm-select-all': '&#xea99;',
		'hm-select-all-filled': '&#xea9a;',
		'hm-drag-handle': '&#xea9b;',
		'hm-drag-handle-filled': '&#xea9c;',
		'hm-share': '&#xea9d;',
		'hm-share-filled': '&#xea9e;',
		'hm-copy': '&#xea9f;',
		'hm-copy-filled': '&#xeaa0;',
		'hm-move': '&#xeaa1;',
		'hm-move_filled': '&#xeaa2;',
		'hm-edit': '&#xeaa3;',
		'hm-edit-filled': '&#xeaa4;',
		'hm-delete': '&#xeaa5;',
		'hm-delete-filled': '&#xeaa6;',
		'hm-more': '&#xeaa7;',
		'hm-more-filled': '&#xeaa8;',
		'hm-more-list': '&#xeaa9;',
		'hm-move-in-album': '&#xeaaa;',
		'hm-move-out-album': '&#xeaab;',
		'hm-photo-edit-location': '&#xeaac;',
		'hm-photo-edit-create': '&#xeaad;',
		'hm-photo-edit-collage': '&#xeaae;',
		'hm-photo-edit-document-correction': '&#xeaaf;',
		'hm-photo-edit-crop-1-1': '&#xeab0;',
		'hm-photo-edit-crop-2-3': '&#xeab1;',
		'hm-photo-edit-crop-3-2': '&#xeab2;',
		'hm-photo-edit-crop-3-4': '&#xeab3;',
		'hm-photo-edit-crop-4-3': '&#xeab4;',
		'hm-photo-edit-crop-9-16': '&#xeab5;',
		'hm-photo-edit-crop-16-9': '&#xeab6;',
		'hm-photo-edit-crop-9-21': '&#xeab7;',
		'hm-photo-edit-crop-21-9': '&#xeab8;',
		'hm-photo-edit-rotate': '&#xeab9;',
		'hm-photo-edit-rectify': '&#xeaba;',
		'hm-photo-edit-free': '&#xeabb;',
		'hm-photo-edit-more': '&#xeabc;',
		'hm-screenshot-arbitrary-graphics': '&#xeabd;',
		'hm-screenshot-rectangle': '&#xeabe;',
		'hm-screenshot-pen-shape': '&#xeabf;',
		'hm-screenshot-waveform': '&#xeac0;',
		'hm-screenshot-arrowhead': '&#xeac1;',
		'hm-screenshot-line': '&#xeac2;',
		'hm-screenshot-square': '&#xeac3;',
		'hm-screenshot-circle': '&#xeac4;',
		'hm-screenshot-thickness': '&#xeac5;',
		'hm-screenshot-graffiti': '&#xeac6;',
		'hm-screenshot-mosaic': '&#xeac7;',
		'hm-screenshot-scrollshot': '&#xeac8;',
		'hm-files-document': '&#xeac9;',
		'hm-files-document-txt': '&#xeace;',
		'hm-files-document-log': '&#xead6;',
		'hm-files-document-xml': '&#xeadb;',
		'hm-files-document-html': '&#xeae1;',
		'hm-files-document-chm': '&#xeaea;',
		'hm-files-document-docx': '&#xeaf1;',
		'hm-files-document-xlsx': '&#xeaf5;',
		'hm-files-document-pptx': '&#xeaf9;',
		'hm-files-document-pdf': '&#xeafd;',
		'hm-files-image': '&#xeb03;',
		'hm-files-audio': '&#xeb07;',
		'hm-files-audio-wav': '&#xeb0a;',
		'hm-files-audio-mp3': '&#xeb11;',
		'hm-files-audio-wma': '&#xeb17;',
		'hm-files-audio-flac': '&#xeb1e;',
		'hm-files-audio-ape': '&#xeb27;',
		'hm-files-audio-m4a': '&#xeb2f;',
		'hm-files-audio-amr': '&#xeb36;',
		'hm-files-video': '&#xeb3e;',
		'hm-files-compress': '&#xeb41;',
		'hm-files-compress-zip': '&#xeb4b;',
		'hm-files-compress-rar': '&#xeb58;',
		'hm-files-compress-7z': '&#xeb68;',
		'hm-files-contact': '&#xeb74;',
		'hm-files-calendar': '&#xeb77;',
		'hm-files-download': '&#xeb7b;',
		'hm-files-application': '&#xeb7f;',
		'hm-files-unknown': '&#xeb85;',
		'hm-files-folder': '&#xeb88;',
		'hm-files-folder-empty': '&#xeb8c;',
		'hm-contacts': '&#xeb8f;',
		'hm-contacts-filled': '&#xeb90;',
		'hm-contacts-group': '&#xeb91;',
		'hm-contacts-group-filled': '&#xeb92;',
		'hm-contacts-add': '&#xeb93;',
		'hm-contacts-add-filled': '&#xeb94;',
		'hm-contacts-add-group': '&#xeb95;',
		'hm-contacts-add-group-filled': '&#xeb96;',
		'hm-nickname': '&#xeb97;',
		'hm-nickname-filled': '&#xeb98;',
		'hm-contacts-block': '&#xeb99;',
		'hm-assistant': '&#xeb9a;',
		'hm-assistant-filled': '&#xeb9b;',
		'hm-business-card': '&#xeb9c;',
		'hm-business-card-filled': '&#xeb9d;',
		'hm-portrait': '&#xeb9e;',
		'hm-detail': '&#xeba0;',
		'hm-detail-filled': '&#xeba1;',
		'hm-help': '&#xeba2;',
		'hm-help-filled': '&#xeba3;',
		'hm-forbid': '&#xeba4;',
		'hm-forbid-filled': '&#xeba5;',
		'hm-fail': '&#xeba6;',
		'hm-fail-filled': '&#xeba7;',
		'hm-error': '&#xeba8;',
		'hm-privacy-statement': '&#xebaa;',
		'hm-allergies-reaction': '&#xebab;',
		'hm-keyboard-menu': '&#xebac;',
		'hm-keyboard-default': '&#xebad;',
		'hm-keyboard-pinyin': '&#xebae;',
		'hm-keyboard-wubi': '&#xebaf;',
		'hm-keyboard-zhuyin': '&#xebb0;',
		'hm-keyboard-cangjie': '&#xebb1;',
		'hm-keyboard-handwritten': '&#xebb2;',
		'hm-keyboard-language': '&#xebb3;',
		'hm-keyboard-mode': '&#xebb4;',
		'hm-keyboard-one-hand': '&#xebb5;',
		'hm-keyboard-float': '&#xebb6;',
		'hm-keyboard-thumb': '&#xebb7;',
		'hm-keyboard-size': '&#xebb8;',
		'hm-keyboard-magnify': '&#xebb9;',
		'hm-keyboard-move': '&#xebba;',
		'hm-keyboard-resize': '&#xebbb;',
		'hm-keyboard-restore': '&#xebbc;',
		'hm-keyboard-selector': '&#xebbd;',
		'hm-keyboard-cursor-left': '&#xebbe;',
		'hm-keyboard-cursor-right': '&#xebbf;',
		'hm-keyboard-delete': '&#xebc0;',
		'hm-keyboard-enter': '&#xebc1;',
		'hm-keyboard-feedback': '&#xebc2;',
		'hm-keyboard-mechanical': '&#xebc3;',
		'hm-keyboard-swipe-up': '&#xebc4;',
		'hm-keyboard-traditional': '&#xebc5;',
		'hm-keyboard-en-associate': '&#xebc6;',
		'hm-keyboard-uppercase': '&#xebc7;',
		'hm-keyboard-lowercase': '&#xebc8;',
		'hm-keyboard-reverse-handed': '&#xebc9;',
		'hm-camera-motion-photo': '&#xebca;',
		'hm-camera-sound-photo': '&#xebcb;',
		'hm-camera-video': '&#xebcc;',
		'hm-camera-ai-on': '&#xebcd;',
		'hm-camera-ai-off': '&#xebce;',
		'hm-camera-fliter': '&#xebcf;',
		'hm-camera-aperture': '&#xebd0;',
		'hm-camera-aperture-on': '&#xebd1;',
		'hm-camera-aperture-off': '&#xebd2;',
		'hm-camera-aspect-ratio': '&#xebd3;',
		'hm-camera-aspect-ratio-filled': '&#xebd4;',
		'hm-camera-video-resolution': '&#xebd5;',
		'hm-camera-zoom': '&#xebd6;',
		'hm-camera-wide-angle': '&#xebd7;',
		'hm-camera-continuous-shooting': '&#xebd8;',
		'hm-camera-3d': '&#xebd9;',
		'hm-camera-compose': '&#xebda;',
		'hm-camera-full-screen': '&#xebdb;',
		'hm-media-music': '&#xebdd;',
		'hm-media-music-filled': '&#xebde;',
		'hm-media-play': '&#xebdf;',
		'hm-media-play-filled': '&#xebe0;',
		'hm-media-pause': '&#xebe1;',
		'hm-media-pause-filled': '&#xebe2;',
		'hm-media-play-previous': '&#xebe3;',
		'hm-media-play-next': '&#xebe4;',
		'hm-media-order-play': '&#xebe5;',
		'hm-media-shuffle-play': '&#xebe6;',
		'hm-media-loop-play': '&#xebe7;',
		'hm-media-single-loop-play': '&#xebe8;',
		'hm-media-random-play': '&#xebe9;',
		'hm-controlcenter-flightmode-filled': '&#xebea;',
		'hm-controlcenter-5G-filled': '&#xebeb;',
		'hm-controlcenter-mobiledata-filled': '&#xebec;',
		'hm-controlcenter-wlan-filled': '&#xebed;',
		'hm-controlcenter-bluetooth-filled': '&#xebee;',
		'hm-controlcenter-location-filled': '&#xebef;',
		'hm-controlcenter-nfc-filled': '&#xebf0;',
		'hm-controlcenter-huaweishare-filled': '&#xebf1;',
		'hm-controlcenter-hotspot-filled': '&#xebf2;',
		'hm-controlcenter-wireless-projection-filled': '&#xebf3;',
		'hm-switch-multi-screen': '&#xebf4;',
		'hm-controlcenter-eyeconfort-filled': '&#xebf5;',
		'hm-controlcenter-dark-filled': '&#xebf6;',
		'hm-controlcenter-auto-rotate-filled': '&#xebf7;',
		'hm-controlcenter-ring-on-filled': '&#xebf8;',
		'hm-controlcenter-ring-off-filled': '&#xebf9;',
		'hm-controlcenter-flashlight-on-filled': '&#xebfa;',
		'hm-controlcenter-flashlight-off-filled': '&#xebfb;',
		'hm-controlcenter-ultra-power-saver-filled': '&#xebfc;',
		'hm-controlcenter-super-power-saver-filled': '&#xebfd;',
		'hm-controlcenter-screenshot-filled': '&#xebfe;',
		'hm-controlcenter-screen-recording-filled': '&#xebff;',
		'hm-controlcenter-floatingdock-filled': '&#xec00;',
		'hm-controlcenter-brightness-plus': '&#xec01;',
		'hm-controlcenter-brightness-reduce': '&#xec02;',
		'hm-controlcenter-donotdisturb-filled': '&#xec03;',
		'hm-public-settings': '&#xec04;',
		'hm-public-settings-filled': '&#xec05;',
		'hm-public-sim': '&#xec06;',
		'hm-public-sim-filled': '&#xec07;',
		'hm-public-themes': '&#xec08;',
		'hm-public-themes-filled': '&#xec09;',
		'hm-public-display': '&#xec0a;',
		'hm-public-display-filled': '&#xec0b;',
		'hm-public-brightness': '&#xec0c;',
		'hm-public-brightness-filled': '&#xec0d;',
		'hm-public-sound': '&#xec0e;',
		'hm-public-sound-filled': '&#xec0f;',
		'hm-public-volume-down': '&#xec10;',
		'hm-public-volume-down-filled': '&#xec11;',
		'hm-public-sound-off': '&#xec12;',
		'hm-public-sound-off-filled': '&#xec13;',
		'hm-public-vibration': '&#xec14;',
		'hm-public-vibration-filled': '&#xec15;',
		'hm-public-donotdisturb': '&#xec16;',
		'hm-public-donotdisturb-filled': '&#xec17;',
		'hm-public-ring': '&#xec18;',
		'hm-public-ring-filled': '&#xec19;',
		'hm-public-ring-off': '&#xec1a;',
		'hm-public-ring-off-filled': '&#xec1b;',
		'hm-public-password-invisible': '&#xec1c;',
		'hm-public-visual-accessibility': '&#xec1d;',
		'hm-public-app': '&#xec1e;',
		'hm-public-app-filled': '&#xec1f;',
		'hm-public-appstore': '&#xec20;',
		'hm-public-appstore-filled': '&#xec21;',
		'hm-public-battery': '&#xec22;',
		'hm-public-battery-filled': '&#xec23;',
		'hm-public-storage': '&#xec24;',
		'hm-public-storage-filled': '&#xec25;',
		'hm-public-sd': '&#xec26;',
		'hm-public-sd-filled': '&#xec27;',
		'hm-public-security': '&#xec28;',
		'hm-public-security-filled': '&#xec29;',
		'hm-public-privacy': '&#xec2a;',
		'hm-public-gps': '&#xec2b;',
		'hm-public-gps-filled': '&#xec2c;',
		'hm-public-navigation': '&#xec2d;',
		'hm-public-navigation-filled': '&#xec2e;',
		'hm-public-quickstart': '&#xec2f;',
		'hm-public-quickstart-filled': '&#xec30;',
		'hm-public-calendar': '&#xec31;',
		'hm-public-calendar-filled': '&#xec32;',
		'hm-public-time': '&#xec33;',
		'hm-public-time-filled': '&#xec34;',
		'hm-public-clock': '&#xec35;',
		'hm-public-clock-filled': '&#xec36;',
		'hm-public-worldclock': '&#xec37;',
		'hm-public-worldclock-filled': '&#xec38;',
		'hm-public-stopwatch': '&#xec39;',
		'hm-public-stopwatch-filled': '&#xec3a;',
		'hm-public-timer': '&#xec3b;',
		'hm-public-timer-filled': '&#xec3c;',
		'hm-public-camera': '&#xec3d;',
		'hm-public-camera-filled': '&#xec3e;',
		'hm-public-video': '&#xec3f;',
		'hm-public-video-filled': '&#xec40;',
		'hm-public-screencap': '&#xec41;',
		'hm-public-screencap-filled': '&#xec42;',
		'hm-gallery-shortcut-gallery': '&#xec43;',
		'hm-gallery-shortcut-favorite': '&#xec45;',
		'hm-gallery-shortcut-discover': '&#xec47;',
		'hm-public-picture': '&#xec49;',
		'hm-public-picture-filled': '&#xec4a;',
		'hm-public-albums': '&#xec4b;',
		'hm-public-albums-filled': '&#xec4c;',
		'hm-public-highlights': '&#xec4d;',
		'hm-public-highlights-filled': '&#xec4e;',
		'hm-gallery-discover': '&#xec4f;',
		'hm-gallery-discover-filled': '&#xec50;',
		'hm-public-favorites': '&#xec52;',
		'hm-public-favorites-filled': '&#xec53;',
		'hm-public-highlight': '&#xec54;',
		'hm-public-highlight-filled': '&#xec55;',
		'hm-public-thumbsup': '&#xec56;',
		'hm-public-thumbsup-filled': '&#xec57;',
		'hm-gallery-blur': '&#xec58;',
		'hm-gallery-blur-filled': '&#xec59;',
		'hm-public-save': '&#xec5a;',
		'hm-public-save-filled': '&#xec5b;',
		'hm-gallery-list-damage': '&#xec5c;',
		'hm-gallery-puzzle': '&#xec5d;',
		'hm-gallery-map-all': '&#xec5e;',
		'hm-gallery-cloud-synchronization': '&#xec5f;',
		'hm-gallery-nocloud-light': '&#xec60;',
		'hm-files-cloud-browse': '&#xec61;',
		'hm-public-file': '&#xec62;',
		'hm-public-file-filled': '&#xec63;',
		'hm-public-notes': '&#xec64;',
		'hm-public-notes-filled': '&#xec65;',
		'hm-public-clean': '&#xec66;',
		'hm-public-clean-filled': '&#xec67;',
		'hm-public-history': '&#xec68;',
		'hm-public-filter': '&#xec69;',
		'hm-files-time-sort': '&#xec6a;',
		'hm-files-size-sort': '&#xec6b;',
		'hm-files-type-sort': '&#xec6c;',
		'hm-files-spreadsheet-drive': '&#xec6d;',
		'hm-files-presentation-drive': '&#xec6e;',
		'hm-public-printer': '&#xec6f;',
		'hm-public-drawer': '&#xec70;',
		'hm-public-drawer-filled': '&#xec71;',
		'hm-public-code': '&#xec72;',
		'hm-public-code-filled': '&#xec73;',
		'hm-contacts-birthday': '&#xec74;',
		'hm-contacts-birthday-filled': '&#xec75;',
		'hm-contacts-blood-type': '&#xec76;',
		'hm-public-home': '&#xec77;',
		'hm-public-home-filled': '&#xec78;',
		'hm-contacts-company': '&#xec79;',
		'hm-contacts-company-filled': '&#xec7a;',
		'hm-contacts-earpiece-emergency': '&#xec7b;',
		'hm-contacts-emergency-information-drug': '&#xec7c;',
		'hm-contacts-medication-status-precautions': '&#xec7d;',
		'hm-contacts-organ-donors': '&#xec7e;',
		'hm-public-email': '&#xec7f;',
		'hm-public-email-filled': '&#xec80;',
		'hm-public-email-send': '&#xec81;',
		'hm-public-email-send-filled': '&#xec82;',
		'hm-public-fast': '&#xec83;',
		'hm-public-fast-filled': '&#xec84;',
		'hm-public-emoji': '&#xec85;',
		'hm-public-emoji-filled': '&#xec86;',
		'hm-public-face': '&#xec87;',
		'hm-public-face-filled': '&#xec88;',
		'hm-message-allread': '&#xec89;',
		'hm-public-voice': '&#xec8a;',
		'hm-public-voice-filled': '&#xec8b;',
		'hm-message-continue': '&#xec8c;',
		'hm-message-ppt': '&#xec8d;',
		'hm-message-camera': '&#xec8e;',
		'hm-message-emoji': '&#xec91;',
		'hm-message-emoji-1': '&#xec96;',
		'hm-message-emoji-2': '&#xec98;',
		'hm-message-symbol': '&#xec9d;',
		'hm-public-lock': '&#xec9e;',
		'hm-public-lock-filled': '&#xec9f;',
		'hm-public-unlock': '&#xeca0;',
		'hm-public-unlock-filled': '&#xeca1;',
		'hm-public-flashlight': '&#xeca2;',
		'hm-public-flashlight-filled': '&#xeca3;',
		'hm-desktop-servicewidgets': '&#xeca4;',
		'hm-desktop-pin': '&#xeca5;',
		'hm-desktop-widgets': '&#xeca6;',
		'hm-desktop-transitions': '&#xeca7;',
		'hm-desktop-perspective': '&#xeca8;',
		'hm-desktop-squeeze': '&#xeca9;',
		'hm-desktop-box': '&#xecaa;',
		'hm-desktop-flipover': '&#xecab;',
		'hm-desktop-rotate': '&#xecac;',
		'hm-desktop-page': '&#xecad;',
		'hm-desktop-windmill': '&#xecae;',
		'hm-public-cards': '&#xecaf;',
		'hm-public-cards-filled': '&#xecb0;',
		'hm-public-car': '&#xecb1;',
		'hm-public-car-filled': '&#xecb2;',
		'hm-public-questionnaire': '&#xecb4;',
		'hm-public-questionnaire-filled': '&#xecb5;',
		'hm-public-feedback': '&#xecb6;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/hm-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
