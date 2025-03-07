new Vue({
    el: '#app',
    data() {
      return {
        questions: [
          {
            question: "你是谁",
            options: ["好人", "坏人", "钝角"],
            correct: 1,
          },
          {
            question: "你喜欢谁",
            options: ["鸡块", "汉堡", "钝角"],
            correct: 1,
            isFinal: true, // ���Ϊ���һ������
          },
        ],
        currentIndex: 0,
        showResult: false,
        resultGif: "",
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
    },
    methods: {
      handleAnswer(selectedIndex) {
        if (selectedIndex === this.currentQuestion.correct) {
          if (this.currentQuestion.isFinal) {
            this.showResult = true;
            this.resultGif = "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"; // ���Ķ�ͼ
          } else {
            this.currentIndex++;
          }
        } else if (this.currentQuestion.isFinal) {
          this.showResult = true;
          this.resultGif = "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif"; // ������ͼ
        } else {
          this.currentIndex++;
        }
      },
      resetQuiz() {
        this.currentIndex = 0;
        this.showResult = false;
      },
    },
  });
