import store from './index'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'


@Module({ name: "Title", dynamic: true, store })
class Title extends VuexModule {
	title: string = "App Title"

	get GetTitle() {
		return this.title
	}

	@Mutation
	SET_TITLE(title: string) {
		this.title = title
	}

	@Action
	SetTitle(title: string) {
		this.SET_TITLE(title)
	}
}

export default getModule(Title)
