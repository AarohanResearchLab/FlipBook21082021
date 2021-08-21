/* @Booklet
----------------------------------------*/
	.booklet           {width:800px; height:600px; position:relative; /*background:#fff;*/ margin:0 auto 10px;}
	.booklet .b-page  {left:0; top:0; position:absolute; overflow:hidden; padding:0;}
	
	.booklet .b-pN  {}
	.booklet .b-p0  {}
	.booklet .b-p1  {}
	.booklet .b-p2  {}    
	.booklet .b-p3  {}
	.booklet .b-p4  {}
	
	/*.booklet .b-load  {display:none;}*/
   
   	/* Page Wrappers */
	.booklet .b-wrap       {top:0; position:absolute;}
	.booklet .b-wrap-left  {background:#fff;}
	.booklet .b-wrap-right {background:#efefef;}
	
	.booklet .b-pN .b-wrap,
	.booklet .b-p1 .b-wrap,
	.booklet .b-p2 .b-wrap,
	.booklet .b-p3 .b-wrap,
	.booklet .b-p4 .b-wrap  {left:0;}
	.booklet .b-p0 .b-wrap  {right:0;}
	
   	/* Custom Page Types */
	.booklet .b-page-blank  {padding:0; width:100%; height:100%;}
	.booklet .b-page-cover  {padding:0; width:100%; height:100%; background:#925C0E;}
	.booklet .b-page-cover h3  {color:#fff; text-shadow:0px 1px 3px #222;}
   
   	/* Page Numbers */
	.booklet .b-counter {bottom:10px; position:absolute; display:block; width:25px; height:20px; background:#ccc; color:#444; text-align:center; font-family:Georgia, "Times New Roman", Times, serif; font-size:10px; padding:5px 0 0;}
	.booklet .b-wrap-left  .b-counter  {left:10px;}
	.booklet .b-wrap-right .b-counter {right:10px;}
   
   	/* Page Shadows */
	.booklet .b-shadow-f  {right:0; top:0; position:absolute; opacity:0; background-image:url("images/shadow-top-forward.png"); background-repeat:repeat-y; background-position:100% 0;}
	.booklet .b-shadow-b  {left:0;  top:0; position:absolute; opacity:0; background-image:url("images/shadow-top-back.png");    background-repeat:repeat-y; background-position:0 0;}
	
	.booklet .b-p0 {background-image:url("images/shadow.png"); background-repeat:repeat-y; background-position:100% 10px;}
	.booklet .b-p3 {background-image:url("images/shadow.png"); background-repeat:repeat-y; background-position:0 10px;}
	
   	/* Overlay Controls */
	.booklet .b-overlay      {top:0; position:absolute; height:100%; width:50%;}
	.booklet .b-overlay-prev {left:0;}
	.booklet .b-overlay-next {right:0;}
	
   	/* Tab Controls */
	.booklet .b-tab        {background:#000; height:40px; width:100%; padding:10px 0 0; text-align:center; color:#ccc; position:absolute; font-size:11px;}
	.booklet .b-tab-prev   {left:0;}
	.booklet .b-tab-next   {right:0;}
	.booklet .b-tab:hover  {background:#aaa; color:#000;}	
	
   	/* Arrow Controls */
	.booklet .b-arrow          {display:block; position:absolute; text-indent:-9999px; top:0; height:100%; width:74px;}
	.booklet .b-arrow div      {display:none; text-indent:-9999px; height:170px; width:74px; position:absolute; left:0; top:25%;}
	.booklet .b-arrow-next     {right:-80px;}
	.booklet .b-arrow-prev     {left:-80px;}
	.booklet .b-arrow-next div {background:url("images/arrow-next.png") no-repeat left top;}
	.booklet .b-arrow-prev div {background:url("images/arrow-prev.png") no-repeat left top;}
		
/* @z-index fix (needed for older IE browsers)
----------------------------------------*/
	body              {z-index:0;}
    .b-menu           {z-index:100;}
    .b-selector       {z-index:100;}
	.booklet          {z-index:10;}
    .b-pN             {z-index:10;}
    .b-p0             {z-index:10;}
    .b-p1             {z-index:10;}
    .b-p2             {z-index:10;}
    .b-p3             {z-index:10;}
    .b-p4             {z-index:10;}
    .b-prev           {z-index:40;}
    .b-next           {z-index:40;}
    .b-counter        {z-index:40;}
	
/* @Menu Items
----------------------------------------*/
	.b-menu {height:40px; padding:0 0 10px;}
	
	.b-selector             {height:40px; position:relative; float:right; border:none; color:#cecece; cursor:pointer;}
	.b-selector .b-current  {padding:8px 15px 12px; line-height:20px; min-width:18px; height:20px; display:block; background:#000; text-align:center;}
	.b-selector-page        {width:auto; margin-left:15px;}
	.b-selector-chapter     {width:auto;}
	
	.b-selector:hover            {color:#fff; background-position:left 0px;}
	.b-selector:hover .b-current {background-position:right 0px;}
	.b-selector ul               {overflow:hidden; margin:0; list-style:none !important; position:absolute; top:40px; right:0; padding:0 0 10px; background:#000; width:240px; font:normal 12px "Myriad Pro", Myriad, "DejaVu Sans Condensed","Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;}
	.b-selector li               {border:none;}
	.b-selector a                {color:#cecece; height:14px; text-decoration:none; display:block; padding:5px 10px;}
	.b-selector a .b-text        {float:left; clear:none;}
	.b-selector a .b-num         {float:right; clear:none;}
	.b-selector a:hover          {color:#fff;}
		