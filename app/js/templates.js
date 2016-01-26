angular.module("naut").run(["$templateCache", function($templateCache) {$templateCache.put("templates/footer.html","<span>&copy; {{app.year}} - {{ app.name }}</span>");
$templateCache.put("templates/layer-search.html","<form action=\"\">\n   <p class=\"help-block\">Type and hit enter to search</p>\n   <input type=\"text\" placeholder=\"I\'m looking for...\" ng-model=\"searchTerm\" class=\"form-control input-huge\" />\n   <button type=\"submit\" class=\"hidden\">Search</button>\n</form>\n<div class=\"row\">\n   <div class=\"col-md-4 col-sm-6 pv\">\n      <h4 class=\"text-bold pv-lg\">People (4)</h4>\n      <br/>\n      <ul class=\"list-unstyled\">\n         <!-- START User-->\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/05.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-success point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Marc Fuller</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/06.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-success point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Wade Wade</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/07.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-danger point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Alan Boyd</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/01.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-danger point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Ryan Carr</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n      </ul>\n   </div>\n   <div class=\"col-md-4 col-sm-6 pv\">\n      <h4 class=\"text-bold pv-lg\">Pages (3)</h4>\n      <br/>\n      <ul class=\"list-unstyled\">\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-success circle text-center text-bold\">D</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.dashboard\" layer-morph-close=\"\" class=\"pull-left text-md\">Dashboard</a>\n                  <small class=\"text-muted pull-right mt\">3 matches</small>\n               </div>\n            </div>\n         </li>\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-purple circle text-center text-bold\">P</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.extras.profile\" layer-morph-close=\"\" class=\"pull-left text-md\">Profile</a>\n                  <small class=\"text-muted pull-right mt\">3 matches</small>\n               </div>\n            </div>\n         </li>\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-danger circle text-center text-bold\">P</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.extras.projects\" layer-morph-close=\"\" class=\"pull-left text-md\">Projects</a>\n                  <small class=\"text-muted pull-right mt\">2 match(es)</small>\n               </div>\n            </div>\n         </li>\n      </ul>\n   </div>\n</div>");
$templateCache.put("templates/settings.html","<div class=\"settings-inner\">\n   <div ng-click=\"showSettings = !showSettings\" class=\"settings-button\">\n      <em class=\"icon-cog\"></em>\n   </div>\n   <div ng-controller=\"SettingsController as config\" class=\"settings\">\n      <div class=\"settings-inner\">\n         <div class=\"settings-content\">\n            <div class=\"pt ph\">\n               <p class=\"text-muted\">THEMES</p>\n               <div class=\"clearfix mb\">\n                  <div ng-repeat=\"theme in config.themes\" class=\"pull-left wd-tiny mb\">\n                     <div class=\"setting-color\">\n                        <label>\n                           <input type=\"radio\" name=\"setting-theme\" ng-model=\"app.themeId\" ng-value=\"$index\" ng-change=\"config.setTheme($index)\" />\n                           <span class=\"icon-check\"></span>\n                           <ul class=\"list-table\">\n                              <li ng-class=\"theme.sidebar\"></li>\n                              <li ng-class=\"theme.brand\"></li>\n                              <li ng-class=\"theme.topbar\"></li>\n                           </ul>\n                        </label>\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <hr/>\n            <div class=\"p\">\n               <p class=\"text-muted\">LAYOUT</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Fixed</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isFixed\" ng-disabled=\"app.layout.isMaterial\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Boxed</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isBoxed\" ng-disabled=\"app.layout.isMaterial\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Material</p>\n                  <div class=\"pull-right\">\n                     <label ng-click=\"app.layout.isBoxed = false; app.layout.isFixed = true\" class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isMaterial\" ng-disabled=\"app.layout.isDocked || app.sidebar.isMini\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <div class=\"p\">\n               <p class=\"text-muted\">SIDEBAR</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Mini</p>\n                  <div class=\"pull-right\">\n                     <label ng-click=\"app.layout.isMaterial = false;\" class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.sidebar.isMini\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Right</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.sidebar.isRight\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <div class=\"p\">\n               <p class=\"text-muted\">FOOTER</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Hidden</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.footer.hidden\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <hr/>\n            <div class=\"p\">\n               <!-- START Language list-->\n               <div class=\"pull-right\">\n                  <div dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group btn-group-sm\"><a dropdown-toggle=\"\" class=\"dropdown-toggle clickable\">{{language.selected}}<span class=\"caret\"></span></a>\n                     <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInLeft2\">\n                        <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\" href=\"\">{{langName}}</a>\n                        </li>\n                     </ul>\n                  </div>\n               </div>\n               <!-- END Language list    -->\n               <p class=\"text-muted\">LANGUAGE</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>");
$templateCache.put("templates/sidebar.html","<!-- START Sidebar-->\n<div class=\"sidebar-wrapper\">\n   <div ui-sidebar=\"\" class=\"sidebar\">\n      <div class=\"sidebar-nav\" ng-controller=\"DashboardController as dashboard\">\n         <ul class=\"nav\" ng-if=\"isAdmin() || isSuperAdmin()\">\n            <!-- Iterates over all sidebar items-->\n\n            <li class=\"nav-heading\" ng-if=\"isAdmin() && !isSuperAdmin()\">\n               <span class=\"text-muted\">Faculty Menu</span>\n            </li>\n            <li class=\"nav-heading\" ng-if=\"isSuperAdmin()\">\n               <span class=\"text-muted\">Admin Menu</span>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.classoverview\" title=\"Overview\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-bar-chart-o\"></em>\n                  <span>Overview</span>\n               </a>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.viewstudents\" title=\"Students\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-list\"></em>\n                  <span>Student List</span>\n               </a>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.edithomepage\" title=\"Home Page Content\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-list\"></em>\n                  <span>Home Page Content</span>\n               </a>\n            </li>\n         </ul>\n         <ul class=\"nav\" ng-if=\"isSuperAdmin()\">\n            <hr>\n            <!--\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.tests\" title=\"Cards\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-check\"></em>\n                  <span>Tests</span>\n               </a>\n            </li>\n            -->\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.adminCourses\" title=\"Lessons\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-code\"></em>\n                  <span>Courses</span>\n               </a>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.adminLessons\" title=\"Lessons\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-code\"></em>\n                  <span>Modules</span>\n               </a>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.adminModuleContent\" title=\"Content\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-code\"></em>\n                  <span>Content</span>\n               </a>\n            </li>\n            <!--\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.docs\" title=\"Cards\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-file-text-o\"></em>\n                  <span>Docs</span>\n               </a>\n            </li>\n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.media\" title=\"Media\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-film\"></em>\n                  <span>Media</span>\n               </a>\n            </li>\n            \n            <li ui-sref-active=\"active\">\n               <a ui-sref=\"app.notes\" title=\"Notes\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-pencil\"></em>\n                  <span>Notes</span>\n               </a>\n            </li>-->\n            <hr>\n            <li ui-sref-active=\"active\" ng-if=\"isSuperAdmin()\">\n               <a href=\"{{url}}/admin\" title=\"Admin\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-key\"></em>\n                  <span>Backend Admin</span>\n               </a>\n            </li>\n         </ul>\n\n\n         <!-- STUDENT MENU -->\n         <ul class=\"nav\" ng-if=\"isStudent()\" ng-controller=\"StudentMenuController as SMC\">\n            <!-- Iterates over all sidebar items-->\n            <li class=\"nav-heading\">\n               <span class=\"text-muted\">Learning Modules</span>\n            </li>\n\n            <li ui-sref-active=\"active\" ng-repeat=\"mc in moduleMenuContent\">\n               <a ripple=\"\" ui-sref=\"app.studentdashboard({content: mc.id})\" ng-click=\"$root.iframeActive=false;SMC.currentModule=mc.id;SMC.setCurrentModule();\">\n                  <em class=\"sidebar-item-icon fa fa-file-text-o\"></em>\n                  <span>{{ mc.name }}</span>\n               </a>\n            </li>\n         </ul>\n      </div>\n      <footer class=\"footer\">\n         <span>&copy; {{app.year}} - {{ app.name }}</span>\n      </footer>\n   </div>\n</div>\n<!-- END Sidebar-->");
$templateCache.put("templates/top-navbar-dock.html","<!-- START Top Navbar-->\n<nav role=\"navigation\" ng-controller=\"HeaderNavController as header\" class=\"navbar topnavbar\">\n   <!-- START button offset-->\n   <div class=\"btn-offset\">\n      <button type=\"button\" btn-layer-morph=\"\" target=\"#layer-search\" ripple=\"\" class=\"btn btn-info btn-circle btn-lg shadow-z1\">\n         <em class=\"fa fa-search\"></em>\n      </button>\n   </div>\n   <!-- START button offset-->\n   <!-- START navbar header-->\n   <div ng-class=\"app.theme.brand\" class=\"navbar-header\">\n      <a ui-sref=\"app.dashboard\" class=\"navbar-brand\">\n         <img src=\"app/img/logo.png\" alt=\"App Logo\" class=\"brand-logo\" />\n      </a>\n      <!-- Mobile buttons-->\n      <div class=\"mobile-toggles\">\n         <!-- Button to show/hide the header menu on mobile. Visible on mobile only.-->\n         <a href=\"\" ng-click=\"header.toggleHeaderMenu()\" class=\"menu-toggle pull-left\">\n            <em class=\"fa fa-navicon fa-fw\"></em>\n         </a>\n      </div>\n   </div>\n   <!-- END navbar header-->\n   <!-- START Nav wrapper-->\n   <div collapse=\"header.headerMenuCollapsed\" class=\"nav-wrapper collapse navbar-collapse\">\n      <!-- START Left navbar-->\n      <ul class=\"nav navbar-nav\">\n         <li><a href=\"#/\">Back</a>\n         </li>\n         <li dropdown=\"\" class=\"dropdown\"><a href=\"\" dropdown-toggle=\"\" class=\"dropdown-toggle\">Dropdown</a>\n            <!-- START Dropdown menu-->\n            <ul class=\"dropdown-menu\">\n               <!-- START list item-->\n               <li><a href=\"\">Sub menu 1</a>\n               </li>\n               <li><a href=\"\">Sub menu 2</a>\n               </li>\n               <li><a href=\"\">Sub menu 3</a>\n               </li>\n            </ul>\n         </li>\n      </ul>\n      <!-- END Left navbar-->\n   </div>\n</nav>\n<!-- END Top Navbar-->");
$templateCache.put("templates/top-navbar.html","<!-- START Top Navbar-->\n<span ng-controller=\"DashboardController as dashboard\">\n   <nav role=\"navigation\" ng-controller=\"HeaderNavController as header\" class=\"navbar topnavbar\">\n      <!-- START button offset-->\n      <!--\n   <div class=\"btn-offset\">\n      <button type=\"button\" btn-layer-morph=\"\" target=\"#layer-search\" ripple=\"\" class=\"btn btn-info btn-circle btn-lg shadow-z1\">\n         <em class=\"fa fa-search\"></em>\n      </button>\n   </div>\n   -->\n      <!-- START button offset-->\n      <!-- START navbar header-->\n      <div class=\"navbar-header\">\n         <a href=\"/#\" class=\"navbar-brand\">\n            <img src=\"app/img/tlmlogo500w.png\" alt=\"App Logo\" class=\"img-responsive\" />\n         </a>\n         <!-- Mobile buttons-->\n         <div class=\"mobile-toggles\">\n            <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n            <a href=\"\" ng-click=\"app.sidebar.isOffscreen = !app.sidebar.isOffscreen\" class=\"sidebar-toggle\">\n               <em class=\"fa fa-navicon\"></em>\n            </a>\n            <!-- Button to show/hide the header menu on mobile. Visible on mobile only.-->\n            <a href=\"\" ng-click=\"header.toggleHeaderMenu()\" class=\"menu-toggle hidden-material\">\n               <em class=\"fa fa-ellipsis-v fa-fw\"></em>\n            </a>\n         </div>\n      </div>\n      <!-- END navbar header-->\n      <!-- START Nav wrapper-->\n      <div collapse=\"header.headerMenuCollapsed\" class=\"nav-wrapper collapse navbar-collapse\">\n         <!-- START Left navbar-->\n         <ul class=\"nav navbar-nav hidden-material\">\n            <li>\n               <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n               <a href=\"\" ng-click=\"app.sidebar.isOffscreen = !app.sidebar.isOffscreen\" class=\"visible-lg\">\n                  <em ng-class=\"app.sidebar.isOffscreen ? \'fa-caret-right\':\'fa-caret-left\'\" class=\"fa\"></em>\n               </a>\n            </li>\n            <!-- START Apps menu-->\n            <li dropdown=\"\" class=\"dropdown\">\n               <a href=\"\" dropdown-toggle=\"\" ripple=\"\" class=\"dropdown-toggle\" style=\"padding-top: 1.3em; margin-top: 0px; height: 5.5em;\">\n                  <em ng-show=\"user.profile_image\" class=\"fa fa-fw fa-2x pull-left\">\n                     <img ng-src=\"{{mediaUrl}}/{{user.profile_image}}\" class=\"img-responsive\" />\n                  </em>\n                  <em ng-show=\"!user.profile_image\" class=\"fa icon-head fa-fw fa-2x pull-left\"></em>\n                  <div class=\"pull-left\">\n                     <h3 style=\"padding-top: 0px; margin-top: 0px; margin-bottom: 1px;\" class=\"pull-right\">{{user.first_name}} {{user.last_name}}</h3>\n\n                     <div ng-if=\"isSuperAdmin()\" style=\"color:red;\"><b>SUPER ADMIN</b>\n                     </div>\n                     <div ng-if=\"isAdmin()\">Facilitator</div>\n                     <div ng-if=\"isStudent()\">\n                        <span class=\"pull-left\">{{user.course}}</span>\n                     </div>\n                  </div>\n               </a>\n               <!-- START Dropdown menu-->\n               <ul id=\"bg-white\" class=\"dropdown-menu p wd-sm\">\n                  <div class=\"row ml0 mr0 mt mb text-center\">\n                     <a ui-sref=\"app.extras.profile\">\n                        <div class=\"col-xs-6\">\n                           <div class=\"pv\">\n                              <span class=\"block mb\">\n                                 <em class=\"icon-head fa-2x text-warning\"></em>\n                              </span>\n                              <small class=\"text-muted\">Profile</small>\n                           </div>\n                        </div>\n                     </a>\n                     <a href=\"\" data-ng-click=\"logout()\">\n                        <div class=\"col-xs-6\">\n                           <div class=\"pv\">\n                              <span class=\"block mb\">\n                                 <em class=\"fa fa-sign-out fa-2x text-warning\"></em>\n                              </span>\n                              <small class=\"text-muted\">Logout</small>\n                           </div>\n                        </div>\n                     </a>\n                  </div>\n               </ul>\n            </li>\n\n            <!-- END Apps menu-->\n            <!-- START lock screen-->\n\n            <!-- END lock screen-->\n         </ul>\n         <div ng-controller=\"StudentMenuController as SMC\" class=\"navbar-right\">\n            <ul ng-click=\"SMC.getLessonContents()\" ng-if=\"isStudent()\" class=\"nav navbar-nav hidden-material\">\n               <li ng-click=\"SMC.selectedContentType=0; SMC.setContentType();\" ui-sref-active=\"active\" ui-sref=\"app.studentdashboard({lesson: 0})\" type=\"button\" aria-label=\"Left Align\">\n                  <a title=\"Student Dashboard\" ripple=\"\">\n                     <em class=\"sidebar-item-icon fa fa-home\"></em>\n                     <span>Home</span>\n                  </a>\n               </li>\n               <li ui-sref-active=\"active\" ui-sref=\"app.lessons({lesson: 1})\" type=\"button\" aria-label=\"Left Align\">\n                  <a title=\"Readme\" ripple=\"\">\n                     <em class=\"sidebar-item-icon fa fa-file-text-o\"></em>\n                     <span>Lessons</span>\n                  </a>\n               </li>\n               <li ui-sref-active=\"active\" ui-sref=\"app.video({lesson: 3})\" type=\"button\" aria-label=\"Left Align\">\n                  <a title=\"Video\" ripple=\"\">\n                     <em class=\"sidebar-item-icon fa fa-film\"></em>\n                     <span>Video</span>\n                  </a>\n               </li>\n\n               <li ui-sref-active=\"active\" ui-sref=\"app.code({lesson: 9})\" type=\"button\" aria-label=\"Left Align\">\n                  <a title=\"Mailbox\" ripple=\"\">\n                     <em class=\"sidebar-item-icon fa fa-code\"></em>\n                     <span>Code Editor</span>\n                  </a>\n               </li>\n\n\n               <!-- NOTES MENU DROPDOWN -->\n               <li ui-sref-active=\"active\" type=\"button\" dropdown=\"\" class=\"dropdown\">\n                  <a href=\"\" title=\"Notes\" dropdown-toggle=\"\" ripple=\"\" class=\"dropdown-toggle\">\n                     <em class=\"sidebar-item-icon fa fa-file-o\"></em>\n                     <span>Notes</span>\n                  </a>\n\n                  <!-- START Dropdown menu-->\n                  <ul id=\"bg-white\" class=\"dropdown-menu p wd-lg\">\n\n                     <li ng-controller=\"ModalController as modal\">\n                        <a ng-click=\"modal.open()\" href=\"\">\n                           <em class=\"fa fa-plus-circle\"></em>\n                           <span class=\"ml\">Create Note</span>\n                        </a>\n                     </li>\n                     <li>\n                        <a ui-sref=\"app.studentnotes\">\n                           <em class=\"fa fa-file-o\"></em>\n                           <span class=\"ml\">View Notes</span>\n                        </a>\n                     </li>\n                  </ul>\n               </li>\n               <li ui-sref-active=\"active\" ui-sref=\"app.resources({lesson: 5})\" type=\"button\" aria-label=\"Left Align\">\n                  <a title=\"Mailbox\" ripple=\"\">\n                     <em class=\"sidebar-item-icon icon-ribbon\"></em>\n                     <span>Resources</span>\n                  </a>\n               </li>\n            </ul>\n\n         </div>\n      </div>\n      <!-- END Nav wrapper-->\n\n   </nav>\n</span>\n<!-- END Top Navbar-->");}]);