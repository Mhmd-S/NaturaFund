import FaqItem from "@/components/common/FaqItem";
import React from "react";

const HELP_QUESTION_ANSWERS = [
    {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment amount is $100. You can invest any amount above $100.",
    },
    {
        question: "How do I invest?",
        answer: "You can invest by creating an account on our platform and selecting the investment option that best suits you.",
    },
    {
        question: "What is the expected return on investment?",
        answer: "The expected return on investment is 10% per annum.",
    },
    {
        question: "How long is the investment period?",
        answer: "The investment period is 12 months.",
    },
    {
        question: "How do I get started?",
        answer: "You can get started by creating an account on our platform and selecting the investment option that best suits you.",
    },
];

const InvestorHelp = () => {
    return (
        <div className="w-full h-full overflow-y-auto py-14 flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
            <p className="w-1/2 text-center">
                Have a different question and can’t find the answer you’re looking for? Reach out to
                our support team by{" "}
                <a
                    className="text-brand-900 font-semibold hover:underline"
                    href="mailto:someone@example.com"
                >
                    sending us an email
                </a>{" "}
                and we’ll get back to you as soon as we can.
            </p>
            <div className="w-3/4 space-y-5">
                {HELP_QUESTION_ANSWERS.map((item) => (
                    <FaqItem question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default InvestorHelp;
