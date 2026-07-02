# BookStack <br> Project Results Form

December 2024<br>
Sample Co<br>
For demonstration purpose only

## 1. Document Info

The section traces the current document history from its initial composition to the latest version with indication of approval from the responsible parties. Included are the definitions of specific terms and references.

### 1.1. Versions

| Version | Author | Date (mm/dd/yyyy) | Description of change |
| --- | --- | --- | --- |
| 1.0 | Andrey Orlov, IT Dept. | 05.09.2024 | Initial version |

### 1.2. Approval

| Version | Approved by | Date (mm/dd/yyyy) |
| --- | --- | --- |
| 1.0 | Sergey Sergeev, CIO | 07.09.2024 |
| 1.0 | Boris Borisov, Head of Marketing Dept. | 07.09.2024 |

### 1.3. Terms

| Term | Definition |
| --- | --- |
| System | Information System |

### 1.4. References

#### 1.4.1. Project Documentation

| Item no. | Document title |
| --- | --- |
| 1 | [BookStack Business Case](BookStackBC.md) |
| 2 | [BookStack Project Description](BookStackPD.md) |

#### 1.4.2. Solution Documentation

| Item no. | Document title |
| --- | --- |
| 1 | [BookStack Technical Architecture](BookStackTA.md) |
| 2 | [BookStack Support Procedures](BookStackSP.md) |

#### 1.4.3. Training and User Documentation

| Item no. | Document title |
| --- | --- |
| 1 | [BookStack User Guide](BookStackUG.md) |

## 2. Project Scope

The project assessment below is formed based on the information available at the moment of writing.

### 2.1. Objective

Deployment of the BookStack system in the corporate infrastructure.

BookStack is an open-source document management platform suitable for marketing documentation (lists of contractors and clients, style guides and templates etc.).

Functional requirements:

* Increase operational effectiveness when working with the documentation.
* Decrease the risk of outdated information in the documents.
* Decrease the time required to find the relevant information in the documents.

### 2.2. Achievement of Business Benefits

| Business Benefit Category | Impact | Explanation | Assessment |
| --- | --- | --- | --- |
| Efficiency | High | A system with cross links saves time for content management by eliminating the need to update the links manually | Achieved |
| Efficiency | High | BookStack implementation increased the transparency of documentation management and minimized the possibility of keeping wrong or outdated information | Achieved |
| Accessibility | Medium | BookStack can potentially be used by other Sample Co. departments for internal documentation (e.g. IT Dept.) | Extra opportunity |

## 3. Project Approach

* Prepare business requirements
* Prepare security requirements
* Deploy the system
* Test the system
* Pilot on the test environment
* Deploy the system to the production environment
* Go-live

### 3.1. Major Changes

System Architect made a decision to include the Traefik reverse proxy into the system installation which increased the time to deploy and configure the whole system.

Additional time was required to review the technical documents and configuration files and to make corrections as requested by System Architect.

### 3.2. Project Milestones

| Milestone | Target Completion Date | Actual Date | Reasons of Shift |
| --- | --- | --- | --- |
| Project started | 09/01/2024 | 09/01/2024 |  |
| Pre configuration completed | 09/05/2024 | 09/05/2024 |  |
| Analysis completed | 09/15/2024 | 09/15/2024 |  |
| Ready for testing | 09/20/2024 | 09/20/2024 |  |
| Ready for pilot | 10/10/2024 | 10/24/2024 | See  [Section 3.1](#31-major-changes) |
| Ready for going live | 10/19/2024 | 11/09/2024 |
| Go-live | 10/20/2024 | 11/10/2024 |
| Project closure | 10/31/2024 | 11/21/2024 |

### 3.3. Lessons Learned

| Area | Type | Case | Impact | Recommendations |
| --- | --- | --- | --- | --- |
| Communications, Schedule | Negative | System Architect made a decision to include the Traefik reverse proxy into the system installation which increased the time to deploy and configure the whole system | Go-live delayed | At the beginning of the project, initiate additional consultations with System Architect via direct calls,  include System Architect to the reviewer of initial project documents |
| Costs | Positive | VM for deployment of the systems were taken from decommissioned systems of the Marketing Dept. | No additional hardware required | Before requesting the deployment of new VMs it is essential to check if there are existing ones available for use |
| Schedule | Negative | Additional time for the review of the technical documentation and configuration files | Go-live delayed | Add approximately 2 or more weeks to the project plan to allow System Architect and Deployment Lead to define and made the corrections to the system configuration and documents |

## 4. Project Budget

| Expenditure Items |  | Budgeted Costs | Actual Costs | Reason for Shift |
| --- | --- | --- | --- | --- |
| Internal cost | IT Dept. | $5k | $6k | Additional resources were required to deploy Traefik and make corrections to the configuration files |
|  | Marketing Dept. | $1.2k | $2.4k | Additional resources were required to prepare the user documentation and hold trainings for the administrators and pilot users |
|  | **Sub Total** | **$6.2k** | **$8.4k** |  |
| Capital | Hardware | $3.2k | 0 | No additional hardware was required, existing VM were used |
| Total project expenditure |  | **$9.4k** | **$8.4k** |  |

## 5. Post-implementation Activities

| Item | Owner | Scheduled on |
| --- | --- | --- |
| Sign work task and report with Finance Controller | Project Manager | 12/10/2024 |
