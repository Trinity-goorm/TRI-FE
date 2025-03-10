import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter, MemoryRouter, useNavigate} from "react-router-dom";
import BottomBar from "../../components/bar/BottomBar.jsx";


const mockNavigate = vi.fn();


describe('BottomBar', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        useNavigate.mockReturnValue(mockNavigate);
    });

    test("홈 페이지로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <BottomBar />
            </MemoryRouter>
        );

        const homeButton = screen.getByTestId('homeButton');
        fireEvent.click(homeButton);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    test("마이다이닝으로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <BottomBar />
            </MemoryRouter>
        );
        const myDiningButton = screen.getByTestId("myDiningButton");
        fireEvent.click(myDiningButton);
        expect(mockNavigate).toHaveBeenCalledWith('/mydining');
    })


    test("마이페이지로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <BottomBar />
            </MemoryRouter>
        );
        const myPageButton = screen.getByTestId("myPageButton");
        fireEvent.click(myPageButton);
        expect(mockNavigate).toHaveBeenCalledWith('/mypage');
    })
})