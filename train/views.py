from django.shortcuts import render
from .models import Location,Path1,Path2,Path4,Path3,Path5,Path6,Train,Path7,Path8,Info,Path9,Path10


def map(request):
    locations = Location.objects.all()
    path1 = Path1.objects.all()
    path2 = Path2.objects.all()
    path4 = Path4.objects.all()
    path3 = Path3.objects.all()
    path5 = Path5.objects.all()
    path6 = Path6.objects.all()
    path7 = Path7.objects.all()
    path8 = Path8.objects.all()
    path9 = Path9.objects.all()
    path10 = Path10.objects.all()
    train_names = []
    train = Train.objects.all()
    temp = []
    justname = Info.objects.all()

    for i in justname:
        temp.append(i.name)

    temp = list(set(temp))

    for i in train:
        train_names.append(i.name)

    train_names = list(set(train_names))

    l = []
    for i in train_names:
        li = []
        x = Train.objects.filter(name=i).values("dep_hr", "dep_min", "arr_hr", "arr_min")
        li.append(x[0])
        li.append(x[1])
        l.append(li)

    return render(request, 'map.html', {"locations":locations,"path1":path1,"path2":path2,"path4":path4,"path3":path3,"path5":path5,"path6":path6,"path7":path7,"path8":path8,"train":l,"train_name":temp,"path9":path9,"path10":path10})


def detail(request):
    info = Info.objects.all()
    temp = []

    for i in info:
        temp.append(i.name)

    temp = list(set(temp))

    return render(request,'detail.html',{"names":temp})


def specific_detail(request,train_name):
    x = Info.objects.filter(name = train_name)
    return render(request, "specific_detail.html",{"info":x, "name":train_name})

def search(request):
    q = request.GET['q']
    temp = []

    for i in Info.objects.all():
        temp.append(i.name)

    temp = list(set(temp))
    if q in temp:
        x = Info.objects.filter(name = q)
        return render(request, "specific_detail.html",{"info":x, "name":q})
    else:
        return render(request, "nothing.html")
