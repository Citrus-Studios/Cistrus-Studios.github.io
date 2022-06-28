use yew::prelude::*;

enum Msg {}

#[derive(Debug)]
struct Model {
    value: i64,
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self { value: 0 }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        false
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        println!("{ctx:#?}");
        html! {}
    }
}

fn main() {
    yew::start_app::<Model>();
}
