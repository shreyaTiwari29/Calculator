import { render, screen,cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Calc from "./Calc";
afterEach(()=>{
    cleanup();
})
//Test 1
test("showing button exists or not",()=>{
    render(<Calc/>)
    const button=screen.getByTestId('button');
    expect(button).toBeInTheDocument();
});
//Test2
test("operator are disable or not",()=>{
    render(<Calc/>)
    const button=screen.getByTestId('button2');
    expect(button).toBeDisabled();
} );
//Test3
test("operator are disable or not",()=>{
    render(<Calc/>)
    const button=screen.getByTestId('button3');
    expect(button).toBeDisabled();
} );
//Test4
test("operator are disable or not",()=>{
    render(<Calc/>)
    const button=screen.getByTestId('button4');
    expect(button).toBeDisabled();
} );
//Test5
test("operator are disable or not",()=>{
    render(<Calc/>)
    const button=screen.getByTestId('button5');
    expect(button).toBeDisabled();
} );