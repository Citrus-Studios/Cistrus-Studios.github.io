use crate::custom_components::*;
use bindings::console;
use yew::prelude::*;

pub mod bindings;
pub mod custom_components;

enum Msg {}

#[derive(Properties, PartialEq)]
pub struct Props<T: PartialEq> {
    data: T,
}

#[derive(Debug)]
struct App {}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {}
    }

    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {
        false
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        console::log(format!("{ctx:#?}").as_str());
        html! {
            <RedText<String> data={"mommy"}/>
        }
    }
}

fn main() {
    yew::start_app::<App>();
}
