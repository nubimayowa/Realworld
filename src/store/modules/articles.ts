import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
  MutationAction
} from "vuex-module-decorators";
// import store from 'src/store'
import store from "@/store";
import { Article } from "../model";
import * as api from "@/store/api";

type FeedType = "global" | "user";

@Module({
  dynamic: true,
  namespaced: true,
  name: "articles",
  store
})
class ArticlesModule extends VuexModule {
  feed: Article[] = [];
  // userFeed: Article[] = []

  @Mutation
  setFeed(articles: Article[]) {
    this.feed = articles;
  }

  @Action({ commit: "setFeed" })
  async refreshFeed(feedtype: FeedType) {
    const globalFeed = await api.getGlobalFeed();
    return globalFeed.articles;
  }
}

export default getModule(ArticlesModule);
