import {BasePage} from "../base_pages/base_page";


export class BookApi extends BasePage{

    createBulkMarkAsCompleted(count: any) {
        cy.task('getGlobal').then((global_data: any) => {

            cy.request({
                method: "POST",
                url: `${this.constants.apiBaseUrl1}/content/apis/complete-lesson-plans`,
                headers: {'authorization': 'Bearer ' + global_data['accessToken']},
                body: {
                    grade: global_data['grade'],
                    subject: global_data['subject'],
                    count: count,
                    class: global_data['class']
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    }

    reversalOfBulkMarkAsCompleted(count: any) {
        cy.task('getGlobal').then((global_data: any) => {

            cy.request({
                method: "DELETE",
                url: `${this.constants.apiBaseUrl1}/content/apis/complete-lesson-plans`,
                headers: {'authorization': 'Bearer ' + global_data['accessToken']},
                body: {
                    grade: global_data['grade'],
                    subject: global_data['subject'],
                    count: count,
                    class: global_data['class']
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    }

    deleteStatus(count: any) {
        cy.task('getGlobal').then((global_data: any) => {

            cy.request({
                method: "DELETE",
                url: `${this.constants.apiBaseUrl1}/content/apis/complete-lesson-plans`,
                headers: {'authorization': 'Bearer ' + global_data['accessToken']},
                body: {
                    grade: global_data['grade'],
                    subject: global_data['subject'],
                    count: count,
                    class: global_data['class']
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    }

}
