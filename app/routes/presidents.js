import Route from '@ember/routing/route';

export default class PresidetntsRoute extends Route {
    model() {
        return ['Joe Biden', 'Trudo', 'Putin'];
    }
}
