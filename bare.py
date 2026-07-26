import random
time = 60
play = "y"
one = ["one", 3,]
two = ["two", 3,]
three = ["three", 3,]
four = ["four", 3]
personal = [one,two,three,four]
print("Game start")

#ok so by itself, the cards don't add any value to the happiness meter - the combos do. Also, I'm assuming that the happiness meter will go down a set
#amount each turn at first and then that value changes depending on the combo? And the happiness is harder to upkeep and needs more power to stay high?
#Or will we just change the percentage/line that the happiness meter has to stay on?

def playCard(c):
    global time
    time = time - c[1]
    print("Used ", c[0], ". Time now equals ", time)

while play == "y":
    print("Ok this is ur deck bro")
    present = [i[0] for i in personal]
    print(present)
    while time != 0:
        print()
        print("This is ur current hand")
        print()
        hand = []
        for i in range(4):
            current = personal[random.randrange(len(personal))]
            personal.remove(current)
            print(current)
            hand.append(current)

        choice = input("Enter the order you want to play the cards by their position, seperated by a ',' (without a space) ")

        choice = choice.split(",")

        for i in range(4):
            playCard(hand[int(choice[i])-1])

        personal = [one, two, three, four]

