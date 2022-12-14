import React from "react";
import ColorPicker from "./ColorPicker";

export default function CreateScheduleBoxModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 text-white flex-auto w-40 mr-7"
                type="button"
                onClick={() => setShowModal(true)}>일정 생성</button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-96 my-6">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between bg-main-pink p-2 border-b border-solid border-slate-100 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        일정 생성
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*<div className="w-full">*/}
                                    <table className="mt-2">
                                        <tr>
                                            <td className="pl-2.5 pt-1.5">일정명</td>
                                            <td><input className="w-11/12 border-2" type="text" name="title" placeholder="제목을 입력하세요"/></td>
                                        </tr>
                                        <tr>
                                            <td className="pl-2.5 pt-1.5">상세 일정</td>
                                            <td><textarea className="w-11/12 h-36 items-end border-2" placeholder="상세 일정을 입력하세요"></textarea></td>
                                        </tr>
                                        <tr>
                                            <td className="pl-2.5 pt-1.5 pb-1.5">일정 색상</td>
                                            <td><ColorPicker /></td>
                                        </tr>
                                    </table>
                                {/*</div>*/}
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        취소
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        생성
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}