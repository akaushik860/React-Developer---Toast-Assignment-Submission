import Toast from "../components/Toast";


export default {
    title: "components/Toast",
    component: Toast,
    argTypes: {handleButton: {action: "Action Button Clicked"}, handleClose: {action: "Close Button Clicked"}}
}

const Template = args => <Toast {...args} />

export const toastStory  = Template.bind({})
toastStory.args = {
    backgroundColor : "green",
    text: "Warning Now",
    type: "Default",
    icon: true,
    swapIcon: "info",
    divider: true,
    action: true,
    closeAction : true,
}