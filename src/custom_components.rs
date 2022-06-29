use std::fmt::Display;

use stylist::yew::styled_component;
use yew::prelude::*;

use crate::Props;

#[styled_component(RedText)]
pub fn redtext<T: PartialEq + Display>(props: &Props<T>) -> Html {
    html! {
        <p class={
            css!("color: red;")
        }>{&props.data}</p>
    }
}
