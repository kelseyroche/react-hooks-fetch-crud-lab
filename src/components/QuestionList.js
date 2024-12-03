import React from "react";
import QuestionItem from "./QuestionItem"; // Adjust the path as necessary

function QuestionList({ questions, onDeleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;