import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import {MemoryRouter, useNavigate} from "react-router-dom";
import TopBar from "../../components/bar/TopBar.jsx";


const mockNavigate = vi.fn();


describe('TopBar', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        useNavigate.mockReturnValue(mockNavigate);
    });

    test("검색 페이지로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <TopBar />
            </MemoryRouter>
        );

        const goSearchButton = screen.getByRole('goSearch');
        fireEvent.click(goSearchButton);
        expect(mockNavigate).toHaveBeenCalledWith('/search')
    });


    test("마이페이지로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <TopBar />
            </MemoryRouter>
        );
        const goSaveButton = screen.getByRole('goSave');
        fireEvent.click(goSaveButton);
        expect(mockNavigate).toHaveBeenCalledWith('/mypage')
    })
})