import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class SoftwareDevelopment extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Software Development and Maintenance</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                            <Table>
                                <thead>
                                    <th>Process</th>
                                    <th>Software Development and Maintenance</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Category</b></td>
                                        <td>Operational (OPE)</td>
                                    </tr>
                                    <tr>
                                        <td><b>Purpose</b></td>
                                        <td>The purpose of Software Development and Maintenance is to systematically carry out the activities of analysis, design, construction, integration and testing of new or modified software products fulfilling the specified requirements. </td>
                                    </tr>
                                    <tr>
                                        <td><b>Objectives</b></td>
                                        <td>
                                            <ul>
                                                <li>To achieve that the output products are consistent with the input ones in each software development phase, through verification, validation and testing.</li>
                                                <li>To sustain the realization of future cycles or maintenance projects through the integration of the current cycle Software Configuration.</li>
                                                <li>To carry out the activities of the cycle phases fulfilling the current Development Plan.</li>
                                            </ul>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="0" md lg="1"></Col>
                            <img src={require('../assets/software_development.jpg')} height= '2204'  width='1177' useMap="#software_development" alt="My Logo" />
                            <map name="software_development">
                                <Link redirect to="sd_review_rodemap"><area shape="rect" coords="128,57,231,78"/></Link>
                                <Link redirect to="sd_backlog_grooming"><area shape="rect" coords="306,107,410,134"/></Link>
                                <Link redirect to="sd_choose_stories"><area shape="rect" coords="306,148,410,177"/></Link>
                                <Link redirect to="sd_assign_stories"><area shape="rect" coords="495,203,600,231"/></Link>
                                <Link redirect to="sd_make_system_testing_plan"><area shape="rect" coords="870,253,1000,281"/></Link>
                                <Link redirect to="sd_review_system_testing_plan"><area shape="rect" coords="870,299,1000,327"/></Link>
                                <Link redirect to="sd_make_manual"><area shape="rect" coords="680,403,805,412"/></Link>
                                <Link redirect to="sd_review_manual"><area shape="rect" coords="680,448,805,477"/></Link>
                                <Link redirect to="sd_synchronize_management_system"><area shape="rect" coords="680,551,805,586"/></Link>
                                <Link redirect to="sd_add_to_managment_system"><area shape="rect" coords="882,601,1013,635"/></Link>
                                <Link redirect to="sd_make_high_level_design"><area shape="rect" coords="680,653,805,681"/></Link>
                                <Link redirect to="sd_review_high_level_design"><area shape="rect" coords="680,702,805,730"/></Link>
                                <Link redirect to="sd_make_integration_testing_plan"><area shape="rect" coords="870,811,1000,840"/></Link>
                                <Link redirect to="sd_review_integration_testing_plan"><area shape="rect" coords="870,863,1000,893"/></Link>
                                <Link redirect to="sd_high_management_system"><area shape="rect" coords="697,980,809,1028"/></Link>
                                <Link redirect to="sd_develop_TDD"><area shape="rect" coords="680,1048,805,1076"/></Link>
                                <Link redirect to="sd_traceability_requirements"><area shape="rect" coords="704,1097,803,1131"/></Link>
                                <Link redirect to="sd_stories_management_system"><area shape="rect" coords="680,1209,805,1249"/></Link>
                                <Link redirect to="sd_perform_integration_testing"><area shape="rect" coords="870,1287,1003,1316"/></Link>
                                <Link redirect to="sd_merge_to_main"><area shape="rect" coords="680,1385,807,1424"/></Link>
                                <Link redirect to="sd_make_operations_manual"><area shape="rect" coords="680,1441,807,1470"/></Link>
                                <Link redirect to="sd_review_operations_manual"><area shape="rect" coords="680,1488,807,1517"/></Link>
                                <Link redirect to="sd_system_testing"><area shape="rect" coords="894,1592,1002,1621"/></Link>
                                <Link redirect to="sd_update_user_manual"><area shape="rect" coords="680,1682,805,1711"/></Link>
                                <Link redirect to="sd_review_user_manual"><area shape="rect" coords="680,1735,805,1763"/></Link>
                                <Link redirect to="sd_final_changes_managment_system"><area shape="rect" coords="696,1832,810,1870"/></Link>
                                <Link redirect to="sd_make_maintenance_manual"><area shape="rect" coords="680,1904,805,1930"/></Link>
                                <Link redirect to="sd_review_maintenance_manual"><area shape="rect" coords="680,1950,805,1977"/></Link>
                                <Link redirect to="sd_sprint_review"><area shape="rect" coords="314,2040,419,2070"/></Link>
                                <Link redirect to="sd_sprint_retrospective"><area shape="rect" coords="506,2092,611,2121"/></Link>
                            </map>
                        </Row>
                        <br/>  
                    </div>
                </Container>
            </div>
        )
    }
}


export default SoftwareDevelopment