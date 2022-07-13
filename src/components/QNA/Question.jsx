import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export function Question({ item }) {
    const disclosureContainerCSS =
        'my-6  bg-gradient-to-r from-cstmglass2 to-cstmglass rounded-lg';
    const disclosureButtonCSSClose =
        'flex justify-between w-full px-6 py-4 text-sm md:text-[18px] font-gothammedium text-left focus:outline-none ';
    const disclosureButtonCSSOpen =
        'flex justify-between w-full px-6 py-4 text-sm md:text-[18px] font-gothammedium text-left focus:outline-none shadow-md';

    const disclosurePanelCSS =
        'px-6 py-4 pb-2 text-sm md:text-[14px] font-gothambook';
    const openPanelChevronIconCSS = 'transform rotate-180';
    const ChevronIconCSS = 'w-5 h-5 text-cstmdarkergreen';

    return (
        <>
            <Disclosure as='div' className={disclosureContainerCSS}>
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className={
                                open
                                    ? disclosureButtonCSSOpen
                                    : disclosureButtonCSSClose
                            }
                        >
                            <div className='place-content-center'>
                                <span className='text-[24px] mr-3 text-oranges-default'>
                                    Q
                                </span>
                                <span>{item.question}</span>
                            </div>

                            <ChevronDownIcon
                                className={`${
                                    open ? openPanelChevronIconCSS : ''
                                } ${ChevronIconCSS}`}
                            />
                        </Disclosure.Button>
                        {open && (
                            <Disclosure.Panel
                                static
                                className={disclosurePanelCSS}
                            >
                                <div className='flex'>
                                    <span className='text-[24px] mr-3 text-main-blue'>
                                        A
                                    </span>
                                    <span className='flex-grow'>
                                        {item.answer}
                                    </span>
                                </div>
                            </Disclosure.Panel>
                        )}
                    </>
                )}
            </Disclosure>
        </>
    );
}
