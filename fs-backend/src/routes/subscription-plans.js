import SubscriptionController from '../controllers/subscription-plans';
import passport from 'passport';
module.exports = app => {
    let plans = '/plan/';
    app.post(`${plans}create`, SubscriptionController.createPlan);
    app.post(`${plans}edit`, SubscriptionController.editPlan);
    app.post(`${plans}status-modify`, SubscriptionController.updatePlanStatus);
    app.get(`${plans}`, SubscriptionController.getPlans);

};