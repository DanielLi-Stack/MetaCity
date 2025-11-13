# MetaCity
MetaCity: A Collaborative AI-Driven Framework for Urban Design Education
Integrating Multi-Agent Reasoning, Meta-Methods, and Vision–Language Analysis

MetaCity is an experimental platform designed to transform urban design education through multi-agent collaboration, meta-method–guided reasoning, and vision–language model (VLM) capabilities.
It enables students, designers, and AI agents to co-construct explainable, auditable, and data-driven design reasoning in a playful yet rigorous environment.
MetaCity reframes design not as a linear task but as a negotiable process involving hypothesis formation, spatial interpretation, iterative critique, and collective decision-making.


[**Project Page**]() | [**Model Weights**]() | [**Huggingface Demo**]() |



![img](assets/01.png)


![img](assets/05.png)


![img](assets/06.png)


## TODO List

- [x] Release part of Segment-Any-Architecture-Facade dataset. 
- [ ] Release Segment-Any-Architecture-Facade inference code and pretrain weights.
- [ ] Upload Segment-Any-Architecture-Facade training dataset.
- [ ] Release Segment-Any-Architecture-Facade code.



## Inference

```
python Segment_Any_Architecture_Facade_Sample.py --dataset ArchiMetricsNet --batch_size 32  --color_configuration 0 --model_path ckpts/exp/model10000.pt --num_samples 64
```
## Train

```
python Segment_Any_Architecture_Facade_Train.py --dataset ArchiMetricsNet --batch_size 32  --color_configuration 0 
