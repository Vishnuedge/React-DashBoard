import React from 'react'

function DashboardSidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion side" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">ADMIN BOARD</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            <span className="additional">
            <small className='nav-link'><b>INTERFACE</b></small>
            </span>
            <li className="nav-item">
                <a className="nav-link" href='/'>
                    <i className="fas fa-cog"></i>
                    <span>Components  <i class="fas fa-chevron-right px-4"></i> </span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href='/'>
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities <i class="fas fa-chevron-right px-5"></i></span>
                </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>

            {/* ADDONS */}
            <span className="additional">
            <small className='nav-link'><b>ADDONS</b></small>
            </span>

            {/* NAV LINKS - PAGES */}

            <li className="nav-item ">
                <a className="nav-link" href="/">
                <i className="fas fa-fw fa-folder"></i>

                    <span>Pages {"       "} <i class="fas fa-chevron-right px-5"></i></span>
                </a>
            </li>
            
                {/* NAV LINKS - CHARTS */}

                <li className="nav-item ">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts </span>
                    </a>
                </li>
                            
                {/* NAV LINKS - TABLES */}

                <li className="nav-item ">
                                <a className="nav-link" href="/">
                                    <i className="fas fa-fw fa-table"></i>
                                    <span>Tables</span>
                                </a>
                            </li>
            

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default DashboardSidebar