import renderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import React from "react";


describe('Profile component test',() => {
    test("Props status test working check:", () => {
        const component = renderer.create(<ProfileStatus status = "It is work"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("It is work")
    })
    test("False edit mode test working check:", () => {
        const component = renderer.create(<ProfileStatus status = "It is work"/>)
        const instance = component.getInstance()
        expect(instance.state.editMode).toBeFalsy()
    })
    test("span existing test  check:", () => {
        const component = renderer.create(<ProfileStatus status = "It is work"/>)
        const instance = component.root
        let span = instance.findByType("span")
        expect(span.children[0]).toBe("It is work")
    })
    test("span should not be null in first time:", () => {
        const component = renderer.create(<ProfileStatus status = "It is work"/>)
        const instance = component.root
        let span = instance.findByType("span")
        expect(span).not.toBeNull()
    })
    test("Are input will appear in span click and editMode will switch in true:", () => {
        const updateStatus = (props) => {
            return 1
        }
        const component = renderer.create(<ProfileStatus status = "It is work" updateStatus = {updateStatus} />)
        const instance = component.root
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input.props.value).toBe("It is work")
        expect(component.getInstance().state.editMode).toBeTruthy()
    })
})