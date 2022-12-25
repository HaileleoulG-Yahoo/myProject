// jquery ready start
$(document).ready(function () {
  // jQuery code

    // get url
    var _fullURL = window.location.href;

    //Split the url into array
    splitURL = _fullURL.split("=");

    //Get parameter from array at index 1
    _AdditionalServicesSection = splitURL[1];

    if(_AdditionalServicesSection === 'OfficeofEmployeeAssistance'){

          var OfficeofEmployeeAssistance = "show";
          var OfficeofEmployeeAssistanceStyle = "background:#B0DAF2";

    } else if(_AdditionalServicesSection === 'HouseCenterforWellBeing'){

          var HouseCenterforWellBeing = "show";
          var HouseCenterforWellBeingStyle = "background:#B0DAF2";

    } else if(_AdditionalServicesSection === 'OfficeofDiversityandInclusion'){

          var OfficeofDiversityandInclusion = "show";
          var OfficeofDiversityandInclusionStyle = "background:#B0DAF2";

    }else if(_AdditionalServicesSection === 'OfficeofEmployeeAdvocacy'){

          var OfficeofEmployeeAdvocacy= "show";
          var OfficeofEmployeeAdvocacyStyle = "background:#B0DAF2";

    }else if(_AdditionalServicesSection === 'OfficeofHouseEmploymentCounsel'){

          var OfficeofHouseEmploymentCounsel = "show";
          var OfficeofHouseEmploymentCounselStyle = "background:#B0DAF2";

    } else if(_AdditionalServicesSection === 'OfficeofGeneralCounsel'){

          var OfficeofGeneralCounsel = "show";
          var OfficeofGeneralCounselStyle = "background:#B0DAF2";            

    }else if(_AdditionalServicesSection === 'OfficeofCongressionalWorkplaceRights'){

      var OfficeofCongressionalWorkplaceRights = "show";
      var OfficeofCongressionalWorkplaceRightsStyle = "background:#B0DAF2";            

    }else if(_AdditionalServicesSection === 'OfficeofPayrollandBenefits'){

           var OfficeofPayrollandBenefits = "show";
           var OfficeofPayrollandBenefitsStyle = "background:#B0DAF2"; 

    }else if(_AdditionalServicesSection === 'CongressionalStaffAcademy'){

          var CongressionalStaffAcademy = "show";
          var CongressionalStaffAcademyStyle = "background:#B0DAF2";

    }else if(_AdditionalServicesSection === 'CAOCoachProgram'){

          var CAOCoachProgram = "show";
          var CAOCoachProgramStyle = "background:#B0DAF2";

    }

    


  var AdditionalServicesHTML = `<div class="col-12 col-sm-12 col-md-12 col-lg-6 xl-auto">

  <div id="CouncelingAndEmployeeWellBeing" class="row" style="padding: 2rem 1rem;">

    <div class="col-4" style="text-align:right;">
      <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_well-being.svg" alt="" style="width:70px;">
    </div>
    <div class="col-8">

      <h5 class="AdditionalServicesTitle">Counseling and Employee Well-Being</h5>
      <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Take advangate of these helpful wellness resources</p> -->

      <!-- Counceling and Employee Well-Being - Accordion - START -->

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfEmployeeAssistance">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfEmployeeAssistance" aria-expanded="false" aria-controls="flush-collapseOfficeOfEmployeeAssistance">
                Office of Employee Assistance
            </button>
          </h2>
          <div id="flush-collapseOfficeOfEmployeeAssistance" class="accordion-collapse collapse test ${OfficeofEmployeeAssistance}" aria-labelledby="flush-headingOfficeOfEmployeeAssistance" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${OfficeofEmployeeAssistanceStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-employee-assistance" target="_blank" onclick="downloadResource('Office of Employee Assistance')">Office of Employee Assistance</a> provides confidential counseling, training and guidance to individuals, teams and managers; online mental health screening tools; and wellness information. If you would like more information on helping yourself or your staff, with this level of support, whether they are working onsite or remotely, please contact 24 hours a day/7 days per week at 202-225-2400 or via email <a class="Email-Links" href= "mailto:Employee.Assistance@mail.house.gov"><u>Employee.Assistance@mail.house.gov</u></a>.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingHouseCenterForWell-Being">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseHouseCenterForWell-Being" aria-expanded="false" aria-controls="flush-collapseHouseCenterForWell-Being">
                House Center for Well-Being
            </button>
          </h2>
          <div id="flush-collapseHouseCenterForWell-Being" class="accordion-collapse collapse test ${HouseCenterforWellBeing}" aria-labelledby="flush-headingHouseCenterForWell-Being" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${HouseCenterforWellBeingStyle}"><a class="AdditionalSercices-link-title" href="https://wellbeing.house.gov/" target="_blank" onclick="downloadResource('House Center for Well-Being')"> House Center for Well-Being</a> provides a holistic well-being program for the House community. Resources and services include wellness challenges and trainings, individual coaching and personalized support. To learn more about the comprehensive offerings, please contact the House Center for Well-Being at 202-225-0800 or via email <a class="Email-Links" href= "mailto:WellBeing@mail.house.gov"><u>WellBeing@mail.house.gov</u></a>.</div>
          </div>
        </div>

        <!-- <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingCounselingAndEmployeeWell-Being-Dummy">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCounselingAndEmployeeWell-Being-Dummy" aria-expanded="false" aria-controls="flush-collapseCounselingAndEmployeeWell-Being-Dummy">
              Dummy
            </button>
          </h2>
          <div id="flush-collapseCounselingAndEmployeeWell-Being-Dummy" class="accordion-collapse collapse" aria-labelledby="flush-headingCounselingAndEmployeeWell-Being-Dummy" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div> -->

      </div>
      
      <!-- Counceling and Employee Well-Being - Accordion - END -->

    </div>            

  </div>

  <div id="DiversityAndInclusion" class="row" class="row" style="padding: 2rem 1rem;">

    <div class="col-4" style="text-align:right;">
      <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_diversity-inclusion.svg" alt="" style="width:70px;">
    </div>
    <div class="col-8">

      <h5 class="AdditionalServicesTitle">Diversity and Inclusion</h5>
      <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

      <!-- Diversity and Inclusion - Accordion - START -->

      <div class="accordion accordion-flush" id="DiversityAndInclusion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfDiversityAndInclusion">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfDiversityAndInclusion" aria-expanded="false" aria-controls="flush-collapseOfficeOfDiversityAndInclusion">
                Office of Diversity and Inclusion
            </button>
          </h2>
          <div id="flush-collapseOfficeOfDiversityAndInclusion" class="accordion-collapse collapse test ${OfficeofDiversityandInclusion}" aria-labelledby="flush-headingOfficeOfDiversityAndInclusion" data-bs-parent="#DiversityAndInclusion">
            <div class="accordion-body" style="${OfficeofDiversityandInclusionStyle}"><a class="AdditionalSercices-link-title" href="https://diversity.house.gov/" target="_blank" onclick="downloadResource('Office of Diversity and Inclusion')">Office of Diversity and Inclusion</a> office is charged with submitting to Congress a diversity plan to direct and guide House employing offices to recruit, hire, train, develop, advance, promote, and retain a diverse workforce. Additionally, the office will develop and conduct a survey to evaluate diversity in House employing offices. For more information, please contact the Office of Diversity and Inclusion.</div>
          </div>
        </div>

        <!-- <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingDiversityAndInclusionTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDiversityAndInclusionTwo" aria-expanded="false" aria-controls="flush-collapseDiversityAndInclusionTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseDiversityAndInclusionTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingDiversityAndInclusionTwo" data-bs-parent="#DiversityAndInclusion">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingDiversityAndInclusionThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDiversityAndInclusionThree" aria-expanded="false" aria-controls="flush-collapseDiversityAndInclusionThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseDiversityAndInclusionThree" class="accordion-collapse collapse" aria-labelledby="flush-headingDiversityAndInclusionThree" data-bs-parent="#DiversityAndInclusion">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div> -->

      </div>

      <!-- Diversity and Inclusion - Accordion - END -->

    </div>        

  </div>

  <div id="Legal" class="row" class="row" style="padding: 2rem 1rem;">

    <div class="col-4" style="text-align:right;">
      <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_legal.svg" alt="" style="width:70px;">
    </div>
    <div class="col-8">

      <h5 class="AdditionalServicesTitle">Legal</h5>
      <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

      <!-- Legal - Accordion - START -->

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfEmployeeAdvocacy">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfEmployeeAdvocacy" aria-expanded="false" aria-controls="flush-collapseOfficeOfEmployeeAdvocacy">
              Office of Employee Advocacy
            </button>
          </h2>
          <div id="flush-collapseOfficeOfEmployeeAdvocacy" class="accordion-collapse collapse test ${OfficeofEmployeeAdvocacy}" aria-labelledby="flush-headingOfficeOfEmployeeAdvocacy" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${OfficeofEmployeeAdvocacyStyle}"><a class="AdditionalSercices-link-title" href="https://employeeadvocacy.house.gov/" target="_blank" onclick="downloadResource('Office of Employee Advocacy')">Office of Employee Advocacy</a> serves as the legal counsel for employees who need advice or legal representation regarding matters that arise under the laws and regulations applicable to the House under the <a class="AdditionalSercices-link-title" href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title2-chapter24&saved=%7CKHRpdGxlOjIgc2VjdGlvbjoxMzgxIGVkaXRpb246cHJlbGltKSBPUiAoZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyLXNlY3Rpb24xMzgxKQ%3D%3D%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim&edition=prelim" target="_blank" onclick="downloadResource('Congressional Accountability Act of 1995 as amended by the 2018 Reform Act')">Congressional Accountability Act of 1995, as amended by the 2018 Reform Act</a>. Employee Advocacy is a non-partisan office, and there is no charge for its services. House employees may contact the Office of Employee Advocacy at 202-225-8800 or via email <a class="Email-Links" href= "mailto:Employee.Advocacy@mail.house.gov"><u>Employee.Advocacy@mail.house.gov</u></a>.  Information is also available externally at <a class="AdditionalSercices-link-title" href="https://EmployeeAdvocacy.house.gov" target="_blank" onclick="downloadResource('Office of Employee Advocacy')">https://EmployeeAdvocacy.house.gov</a>. </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfHouseEmploymentCounsel">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfHouseEmploymentCounsel" aria-expanded="false" aria-controls="flush-collapseOfficeOfHouseEmploymentCounsel">
              Office of House Employment Counsel
            </button>
          </h2>
          <div id="flush-collapseOfficeOfHouseEmploymentCounsel" class="accordion-collapse collapse test ${OfficeofHouseEmploymentCounsel}" aria-labelledby="flush-headingOfficeOfHouseEmploymentCounsel" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${OfficeofHouseEmploymentCounselStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-the-clerk/office-of-house-employment-counsel" target="_blank" onclick="downloadResource('Office of House Employment Counsel')">Office of House Employment Counsel</a> serves as legal counsel for House employers, providing advice, training, and representation for issues arising under the <a class="AdditionalSercices-link-title" href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title2-chapter24&saved=%7CKHRpdGxlOjIgc2VjdGlvbjoxMzgxIGVkaXRpb246cHJlbGltKSBPUiAoZ3JhbnVsZWlkOlVTQy1wcmVsaW0tdGl0bGUyLXNlY3Rpb24xMzgxKQ%3D%3D%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim&edition=prelim" target="_blank" onclick="downloadResource('Congressional Accountability Act of 1995 as amended by the 2018 Reform Act')">Congressional Accountability Act of 1995, as amended by the 2018 Reform Act</a>.  OHEC is a non-partisan office and there is no charge for OHEC's services.  Employing offices may contact the Office of House Employment Counsel at 202-225-7075 (preferred) or via email <a class="Email-Links" href= "mailto:EmploymentCounsel@mail.house.gov"><u>EmploymentCounsel@mail.house.gov</u></a>.</div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfGeneralCounsel">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfGeneralCounsel " aria-expanded="false" aria-controls="flush-collapseOfficeOfGeneralCounsel">
              Office of General Counsel 
            </button>
          </h2>
          <div id="flush-collapseOfficeOfGeneralCounsel" class="accordion-collapse collapse test ${OfficeofGeneralCounsel}" aria-labelledby="flush-headingOfficeOfGeneralCounsel " data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${OfficeofGeneralCounselStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/office-of-general-counsel" target="_blank" onclick="downloadResource('Office of General Counsel')">Office of General Counsel</a> provides legal advice and representation to Members, committees, officers and employees of the House, without regard to political affiliation, on a variety of matters related to their official duties. The Office will advise whether a specific candidate is eligible for paid employment with the House, and what additional documentation, if any, may be required from the candidate. For additional information, please contact the Office of General Counsel at 202-225-9700.</div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeofCongressionalWorkplaceRights">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeofCongressionalWorkplaceRights " aria-expanded="false" aria-controls="flush-collapseOfficeofCongressionalWorkplaceRights">
              Office of Congressional Workplace Rights 
            </button>
          </h2>
          <div id="flush-collapseOfficeofCongressionalWorkplaceRights" class="accordion-collapse collapse test ${OfficeofCongressionalWorkplaceRights}" aria-labelledby="flush-headingOfficeofCongressionalWorkplaceRights " data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" style="${OfficeofCongressionalWorkplaceRightsStyle}"><a class="AdditionalSercices-link-title" href="https://www.ocwr.gov/" target="_blank" onclick="downloadResource('Office of Congressional Workplace Rights')">Office of Congressional Workplace Rights</a> (OCWR) works to advance workplace rights, safety and health, and accessibility in the legislative branch of the federal government. OCWR, formerly known as the Office of Compliance, was established to ensure the integrity of the Congressional Accountability Act of 1995 (CAA) through programs of dispute resolution, education, and enforcement. These programs assist members of Congress, employing offices, employees, and the visiting public in understanding the 14 workplace and accessibility laws incorporated in the CAA. For additional information, please contact the Office of Congressional Workplace Rights at 202-724-9250 or via email <a class="Email-Links" href= "mailto:ocwrinfo@ocwr.gov"><u>ocwrinfo@ocwr.gov</u></a>.</div>
          </div>
        </div>        

      </div>

      <!-- Legal - Accordion - END -->

    </div>    


  </div>
  
</div>

<div class="col-12 col-sm-12 col-md-12 col-lg-6 xl-auto">

  <div id="PayrollAndBenefits" class="row" class="row" style="padding: 2rem 1rem;">

    <div class="col-4" style="text-align:right;">
      <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_payroll-beneifts.svg" alt="" style="width:70px;">
    </div>
    <div class="col-8">

      <h5 class="AdditionalServicesTitle">Payroll and Benefits</h5>
      <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

      <!-- Payroll and Benefits - Accordion - START -->

      <div class="accordion accordion-flush" id="PayrollAndBenefits">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOfficeOfPayrollAndBenefits">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOfficeOfPayrollAndBenefits" aria-expanded="false" aria-controls="flush-collapseOfficeOfPayrollAndBenefits">
                Office of Payroll and Benefits
            </button>
          </h2>
          <div id="flush-collapseOfficeOfPayrollAndBenefits" class="accordion-collapse collapse test ${OfficeofPayrollandBenefits}" aria-labelledby="flush-headingOfficeOfPayrollAndBenefits" data-bs-parent="#PayrollAndBenefits">
            <div class="accordion-body" style="${OfficeofPayrollandBenefitsStyle}"><a class="AdditionalSercices-link-title" href="https://housenet.house.gov/campus/service-providers/payroll-and-benefits" target="_blank" onclick="downloadResource('Office of Payroll and Benefits')">Office of Payroll and Benefits</a> is responsible for the administration of staff payroll and benefits for the House Leadership, Members, Committees, and support offices in accordance with laws and House rules and regulations. Payroll and Benefits also provides teleconferences, support, counseling, and training to employing office contacts, payroll points-of-contact, and House staff.  For additional information, please contact the Office of Payroll and Benefits at 202-225-1435</div>
          </div>
        </div>

    <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button"
                    data-mdb-toggle="collapse" data-mdb-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne" data-mdb-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't
                    heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button"
                    data-mdb-toggle="collapse" data-mdb-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo" data-mdb-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't
                    heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button"
                    data-mdb-toggle="collapse" data-mdb-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree" data-mdb-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't
                    heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>
    </div> -->

    <!-- Payroll and Benefits - Accordion - END -->

</div>

      <!-- Payroll and Benefits - Accordion - END -->

    </div>    
  </div>

  <div id="TrainingAndEducation" class="row" class="row" style="padding: 2rem 1rem;">

    <div class="col-4" style="text-align:right;">
      <img src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_Add-Resources_training-educ.svg" alt="" style="width:70px;">
    </div>
    <div class="col-8">

      <h5 class="AdditionalServicesTitle">Training and Education</h5>
      <!-- <p style="font-size:15px; text-align:left; line-height: 1;">Text description here..</p> -->

      <!-- Training and Education - Accordion - START -->

      <div class="accordion accordion-flush" id="TrainingAndEducation">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingCongressionalStaffcademy">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCongressionalStaffcademy" aria-expanded="false" aria-controls="flush-collapseCongressionalStaffcademy">
                Congressional Staff Academy
            </button>
          </h2>
          <div id="flush-collapseCongressionalStaffcademy" class="accordion-collapse collapse test ${CongressionalStaffAcademy}" aria-labelledby="flush-headingCongressionalStaffcademy" data-bs-parent="#TrainingAndEducation">
            <div class="accordion-body" style="${CongressionalStaffAcademyStyle}"><a class="AdditionalSercices-link-title" href="https://house.csod.com/samldefault.aspx" target="_blank" onclick="downloadResource('Congressional Staff Academy')">Congressional Staff Academy</a> offers learning opportunities that can help you achieve your career development goals and objectives. You may be familiar with visiting the Congressional Staff Academy for your yearly required Ethics, Cybersecurity, and Workplace Rights & Responsibilities Trainings, but there is much more to learn. For assistance accessing the course offerings, please contact the Congressional Staff Academy at 202-226-3800 or via email <a class="Email-Links" href= "mailto:Staffacademy@mail.house.gov"><u>Staffacademy@mail.house.gov</u></a>.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingCAOCoachProgram">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseCAOCoachProgram" aria-expanded="false" aria-controls="flush-collapseCAOCoachProgram">
                CAO Coach Program
            </button>
          </h2>
          <div id="flush-collapseCAOCoachProgram" class="accordion-collapse collapse test ${CAOCoachProgram}" aria-labelledby="flush-headingCAOCoachProgram" data-bs-parent="#TrainingAndEducation">
            <div class="accordion-body" style="${CAOCoachProgramStyle}"><a class="AdditionalSercices-link-title" href="https://caocoach.house.gov/" target="_blank" onclick="downloadResource('CAO Coach Program')">CAO Coach Program</a> helps House staff navigate their challenging jobs. This new, first of its kind program within the Congressional Staff Academy provides staffers a wide array of resources to help them learn, acquire and strengthen the unique skills needed to be an effective staffer. For more information or to make a one-on-one appointment, please contact the Congressional Staff Academy at 202-226-3800 or via email <a class="Email-Links" href= "mailto:caocoach@mail.house.gov"><u>caocoach@mail.house.gov</u></a>.</div>
          </div>
        </div>

        <!-- <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTrainingAndEducation-Dummy">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTrainingAndEducation-Dummy" aria-expanded="false" aria-controls="flush-collapseTrainingAndEducation-Dummy">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseTrainingAndEducation-Dummy" class="accordion-collapse collapse" aria-labelledby="flush-headingTrainingAndEducation-Dummy" data-bs-parent="#TrainingAndEducation">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div> -->

    <!-- Training and Education - Accordion - END -->



</div>

      <!-- Training and Education - Accordion - END -->

    </div>   
  </div>

</div>`;


  document.getElementById('AdditionalServicesPage').innerHTML = AdditionalServicesHTML




}); // jquery end









