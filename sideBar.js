let sidesideBarMenuBar = document.getElementById("sideBarMenu");

sideBarMenu.innerHTML = `
<aside>
<div id="sidebar" class="nav-collapse  sidebar_2nd" tabindex="5000" style="overflow: hidden; outline: none; ">
    <!-- sidebar menu start-->
    <ul class="sidebar-menu sidebar-menu-2nd transparent" id="nav-accordion" style="padding: 15px 0; box-shadow: none; margin-bottom: 30px;">
        <li class="sub-menu dcjq-parent-li">
            <a href="javascript:void(0)" class="dcjq-parent">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                <span>Restaurants</span>
                <span class="dcjq-icon"></span></a>

            <ul class="sub" style="display: none;">
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/restaurants">Browse All
      (Active)</a></li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/restaurants/index/inactive">Browse
      All
      (Inactive)</a></li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/restaurants/free_delivery">Extra
      Delivery
      Charge</a></li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/restaurants/featured">Featured</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <a href="javascript:void(0)" class="dcjq-parent">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                <span>Food List</span>
                <span class="dcjq-icon"></span></a>
            <ul class="sub" style="display: none;">
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/product/catindex">Category</a>
                </li>

                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/product">Browse All</a>
                </li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/product/add">Add</a></li>


            </ul>
        </li>
        <li class="sub-menu dcjq-parent-li">
            <a href="javascript:void(0)" class="dcjq-parent">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                <span>Grocery Food List</span>
                <span class="dcjq-icon"></span></a>
            <ul class="sub" style="display: none;">
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/productgro/catindex">Category</a>
                </li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/productgro/brandindex">Brand</a>
                </li>

                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/productgro">Browse All</a>
                </li>

            </ul>
        </li>
        <li class="sub-menu dcjq-parent-li">
            <ul class="sub" style="display: none;">
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">

            <ul class="sub" style="display: none;">
            </ul>
        </li>

        <li>
            <a class="" href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/orders">
                <i class="fas fa-box-open"></i>
                <span>Orders</span>
            </a>
        </li>
        <li>
            <a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/user/deliveryman_order">
                <i class="fas fa-box-open"></i>
                <span>Rider Status</span>
            </a>
        </li>

        <li>
            <a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/orders/grocery">
                <i class="fas fa-box-open"></i>
                <span>Orders Grocery</span>
            </a>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <a href="javascript:void(0)" class="dcjq-parent">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>Facebook Customer </span>
                <span class="dcjq-icon"></span></a>
            <ul class="sub" style="display: none;">
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/fbcustomer">Browse All</a>
                </li>
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/fbcustomer/add"> Add</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <a href="javascript:void(0)" class="dcjq-parent">
                <i class="fa fa-bell" aria-hidden="true"></i>
                <span>Notification </span>
                <span class="dcjq-icon"></span></a>
            <ul class="sub" style="display: none;">
                <li>
                    <a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/notification">Browse All</a>
                </li>
                <li>
                    <a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/notification/push"> Push Notification</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">

            <ul class="sub" style="display: none;">
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <ul class="sub" style="display: none;">
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <ul class="sub" style="display: none;">
            </ul>
        </li>

        <li class="sub-menu dcjq-parent-li">
            <ul class="sub" style="display: none;">
            </ul>
        </li>


        <li>
            <a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/institution">
                <i class="fa fa-university" aria-hidden="true"></i>
                <span>Institution</span>
            </a>
        </li>

        <!-- Customer  -->
        <li class="sub-menu dcjq-parent-li customerSection" >
            <a href="javascript:void(0)" class="dcjq-parent customerSection" >
                <i class="fa fa-user"></i>
                <span class="customerSection">Customer </span>
                <span class="customerSection" class="dcjq-icon"></span>
            </a>
            <ul class="sub">
                <!-- Reg. Pending -->
                <li class="customerSection" >
                    <a href="./index.html" class="customerSection" >
                        <span class="customerSection" >Reg. Pending </span>
                    </a>
                </li>
            </ul>
        </li>
        <!-- Employee  -->
        <li class="sub-menu dcjq-parent-li employeeActive" >
            <a href="javascript:void(0)" class="dcjq-parent employeeActive">
                <i class="fa fa-user"></i>
                <span class="employeeActive">Employee </span>
                <span class="dcjq-icon"></span>
            </a>
            <ul class="sub">
                <!-- Management -->
                <li class="sub-menu dcjq-parent-li managementSection">
                    <a href="javascript:void(0)" class="dcjq-parent managementSection">
                        <i class="fa fa-user"></i>
                        <span class="managementSection">Management</span>
                        <span class="dcjq-icon managementSection"></span>
                    </a>
                    <ul class="sub" style="display: none;">
                        <li class="collapsMenu  ">
                            <a class="employeeAddPage" href="./management/add.html">Add</a>
                        </li>
                        <li class="collapsMenu ">
                            <a class="employeeBrowseAllPage" href="./management/browseAll.html">Browse All</a>
                        </li>
                        <li class="collapsMenu">
                            <a class="employeeCategoryPage" href="./management/category.html">Category</a>
                        </li>
                    </ul>
                </li>

                <!-- Rider  -->
                <li class="sub-menu dcjq-parent-li riderSection">
                    <a href="javascript:void(0)" class="dcjq-parent riderSection">
                        <i class="fa fa-user"></i>
                        <span class="riderSection">Rider</span>
                        <span class="dcjq-icon riderSection"></span></a>
                    <ul class="sub" style="display: none;">
                        <li class="collapsMenu ">
                            <a class="riderAddPage" href="./rider/add.html">Add</a>
                        </li>
                        <li class="collapsMenu ">
                            <a class="riderBrowseAllPage" href="./rider/browseAll.html" >Browse All</a>
                        </li>
                        <li class="collapsMenu">
                            <a class="riderCategoryPage" href="./rider/category.html">Category</a>
                        </li>
                        <li class="collapsMenu ">
                            <a class="riderGradesPage" href="./rider/grades.html">Grades</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>

        <!-- Salary  -->
        <li class="sub-menu dcjq-parent-li riderSalarySection" >
            <a href="javascript:void(0)" class="dcjq-parent riderSalarySection">
                <i class="fa fa-money-bill riderSalarySection" aria-hidden="true"></i>
                <span class="riderSalarySection">Salary </span>
                <span class="dcjq-icon riderSalarySection"></span></a>
            <ul class="sub" style="display: none;">
                <li>
                    <a class="managementSalaryPage" href="./managementSalary/index.html"> Management</a>
                </li>
                <li>
                    <a class="riderSalaryPage" href="./riderSalary/index.html">Rider </a>
                </li>
            </ul>
        </li>



        <li class="sub-menu dcjq-parent-li">
            <ul class="sub" style="display: none;">
                <li><a href="https://foodshahibd.com/foodshahi_ci/foodshahiadmin/orders/report">Order
      Report</a></li>
            </ul>
        </li>

    </ul>
    <!-- sidebar menu end-->
</div>
</aside>
`;
